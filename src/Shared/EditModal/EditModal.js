import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import SmallSpinner from '../SmallSpinner/SmallSpinner';
import './EditModal.css'

const EditModal = ({open , onClose , task , refetch}) => {
   
  const {user , loading} = useContext(AuthProvider)
  const [addLoading , setAddLoading] = useState(true)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if(!open) return null;

  const imgKey = process.env.REACT_APP_imgBB;
    const updateTask = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then(res => res.json())
          .then(img => {
            if (img.success) {
              const newtaskData = {
                 taskName: data.taskName,
                 taskDetails: data.taskDetails,
                 image: img.data.url,
                 email:user?.email,
                 status :task.status
               };
              //  setAddLoading(true)
               fetch(`http://localhost:5000/allTask/${task?._id}` , {
                method : 'PUT',
                headers :{
                    'content-type' : 'application/json',  
                },
                body : JSON.stringify(newtaskData)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                toast.success(`${task.taskName} is now updated successfully`)
                refetch()
                onClose()
                // setAddLoading(false)
                // navigate('/mytask')
            })
    
               console.log(task);
            }
          });
    
        
      };

    return (
        <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <button onClick={onClose} className='absolute right-4 top-4'><XMarkIcon className='h-6 w-6 bg-indigo-600 text-white'/></button>
        <div className='p-5'>
            <h2 className='font-medium text-lg text-center mt-3'>Edit Task Details</h2>
            <form onSubmit={handleSubmit(updateTask)} className="mt-6">
            <div className="w-4/5 mx-auto">
              <input
                {...register("taskName")}
                type="text"
                defaultValue={task.taskName}
                className="w-full text-base bg-gray-50 px-4 py-3 outline-none rounded"
              />
              {errors.taskName && (
                <span className="text-red-500">Please enter Task name</span>
              )}
              <textarea
                {...register("taskDetails")}
                id=""
                className="w-full bg-gray-50 text-base px-4 py-3 outline-none my-3 rounded"
                cols="10"
                rows="5"
                defaultValue={task.taskDetails}
              ></textarea>
              {errors.taskDetails && (
                <span className="text-red-500">Enter task details</span>
              )}
              <input
                {...register("image")}
                type="file"
                className="file-input w-full mt-5"
                placeholder="Upload Image"
              />
              {errors.image && (
                <span className="text-red-500">Select a image</span>
              )}
              <div className="mt-4">
               {
                loading ? <SmallSpinner/> :  <input
                type="submit"
                name="image"
                value="Update Task"
                className="w-full cursor-pointer bg-indigo-600 text-white py-2 font-semibold"
              />
               }
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditModal;
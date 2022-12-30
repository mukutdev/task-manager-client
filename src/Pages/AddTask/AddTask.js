import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import SmallSpinner from "../../Shared/SmallSpinner/SmallSpinner";

const AddTask = () => {
  const {user , loading} = useContext(AuthProvider)
  // const [addLoading , setAddLoading] = useState(true)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgKey = process.env.REACT_APP_imgBB;

  const addNewTask = data => {
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
          const task = {
             taskName: data.taskName,
             taskDetails: data.taskDetails,
             image: img.data.url,
             email:user?.email,
             status :'incomplete'
           };
          //  setAddLoading(true)
           fetch(`https://task-manager-server-two.vercel.app/addTask` , {
            method : 'POST',
            headers :{
                'content-type' : 'application/json',  
            },
            body : JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success(`${task.taskName} is now added successfully`)
            // setAddLoading(false)
            navigate('/mytask')
        })

           console.log(task);
        }
      });

    
  };
  return (
    <section className="container mx-auto h-screen">
      <div className="w-1/3 mx-auto mt-36">
        <div className="bg-white p-4 rounded dark:text-white dark:bg-slate-800">
          <h2 className="text-xl text-center font-semibold mt-4">
            Add A New Task
          </h2>

          <form onSubmit={handleSubmit(addNewTask)} className="mt-6">
            <div className="w-4/5 mx-auto">
              <input
                {...register("taskName", { required: true })}
                type="text"
                className="w-full text-base bg-gray-50 px-4 py-3 outline-none rounded"
                placeholder="Enter Task Name"
              />
              {errors.taskName && (
                <span className="text-red-500">Please enter Task name</span>
              )}
              <textarea
                {...register("taskDetails", { required: true })}
                id=""
                className="w-full bg-gray-50 text-base px-4 py-3 outline-none my-3 rounded"
                cols="10"
                rows="5"
                placeholder="Enter Task Details"
              ></textarea>
              {errors.taskDetails && (
                <span className="text-red-500">Enter task details</span>
              )}
              <input
                {...register("image", { required: true })}
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
                value="Add Task"
                className="w-full cursor-pointer bg-indigo-600 text-white py-2 font-semibold"
              />
               }
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;

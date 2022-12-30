import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import EditModal from "../EditModal/EditModal";

const TaskCard = ({ task, refetch }) => {

  const [openModal , setOpenModal] = useState(false)
  //delete car
  const deleteCar = id => {
    console.log(id);
    fetch(`https://task-manager-server-two.vercel.app/allTask/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          console.log(data);
          toast.success("Task Deleted successfully");
          refetch();
        }
      });
    console.log(id);
  };

  // update task
  const markComplete = id => {
    console.log(id);
    fetch(`https://task-manager-server-two.vercel.app/allTask/update/${id}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success(`Congratulations ${taskName} is Completed`);
          refetch();
        }
      })
      .catch(err => console.log(err));
  };

  const { taskName, taskDetails, image, _id, status } = task;
  return (
    <div className="mx-4">
      <div className="bg-white rounded p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-medium">{taskName}</h2>
          <div className="flex gap-1">
            <PencilSquareIcon onClick={()=> setOpenModal(true)} className="h-5 w-5 text-slate-600 cursor-pointer" />
            <EditModal open={openModal} onClose={()=>setOpenModal(false)} task={task} refetch={refetch}/>
            <TrashIcon
              onClick={() => deleteCar(_id)}
              className="h-5 w-5 text-slate-600 cursor-pointer"
            />
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm font-medium">{taskDetails}</p>
          <div className="flex justify-between my-5 items-center">
            <img src={image} className="h-12 w-12 rounded-full" alt="" />
            <div>
                
                {
                status === 'incomplete' ? <button title="Mark as completed" className="bg-orange-500 rounded-md p-2 text-white" onClick={() => markComplete(_id)}>{status}</button>
                 : <button title="Mark as incomplete" className="bg-green-500 rounded-md p-2 text-white" onClick={() => markComplete(_id)}>{status}</button>
              }
            </div>
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default TaskCard;

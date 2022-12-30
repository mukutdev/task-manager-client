import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import EditModal from "../EditModal/EditModal";
import './TaskCard.css'

const TaskCard = ({ task, refetch }) => {

  const [openModal , setOpenModal] = useState(false)
  //delete car
  const deleteTask = id => {
    // console.log(id);
    fetch(`https://task-manager-server-two.vercel.app/allTask/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          // console.log(data);
          toast.success("Task Deleted successfully");
          refetch();
        }
      });
    // console.log(id);
  };

  // mark complete task
  const markComplete = id => {
    // console.log(id);
    fetch(`https://task-manager-server-mukutdev.vercel.app/allTask/completed/${id}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          // console.log(data);
          toast.success(`Congratulations ${taskName} is Completed`);
          refetch();
        }
      })
      .catch(err => console.log(err));
  };

  // mark incomplete

  const markInComplete = id => {
    // console.log(id);
    fetch(`https://task-manager-server-mukutdev.vercel.app/allTask/incomplete/${id}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          // console.log(data);
          toast.success(`${taskName} Mark as incomplete task`);
          refetch();
        }
      })
      .catch(err => console.log(err));
  };

  const { taskName, taskDetails, image, _id, status } = task;
  return (
    <div className="mx-4 dark:text-white ">
      <div className="bg-white rounded p-4 dark:text-white dark:bg-slate-800">
        <div className="flex justify-between">
          <h2 className="text-xl font-medium mr-4">{taskName}</h2>
          <div className="flex gap-1">
            <PencilSquareIcon onClick={()=> setOpenModal(true)} className="h-6 w-6 p-1 text-slate-600 bg-gray-100 cursor-pointer" />
            <EditModal open={openModal} onClose={()=>setOpenModal(false)} task={task} refetch={refetch}/>
            <TrashIcon
              onClick={() => deleteTask(_id)}
              className="h-6 w-6 p-1 color-red-cs cursor-pointer bg-red-cs"
            />
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm font-medium">{taskDetails}</p>
          <div className="flex justify-between my-5 items-center">
            <img src={image} className="h-12 w-12 rounded-full" alt="" />
            <div className="md:block flex flex-col gap-2 items-center">
                {
                status === 'incomplete' ?<>
                 <button className="incomplete-bg incomplete-color text-sm rounded-sm px-2 p-1 text-white">{status}</button>
                 <button  className="bg-green-cs color-green-cs ml-2 text-sm rounded-sm px-2 p-1 text-white" onClick={() => markComplete(_id)}>Mark as completed</button>
                 </>
                 : <>
                 <button  className="bg-green-cs color-green-cs rounded-sm p-1 text-white text-sm px-2">{status}</button>
                 <button  className="incomplete-bg incomplete-color ml-2 rounded-sm p-1 text-white text-sm px-2" onClick={() => markInComplete(_id)}>Mark as Not Completed</button>
                 </>
              }
            </div>
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default TaskCard;

import React from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
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
             tsName: data.taskName,
             tsDetails: data.taskDetails,
             image: img.data.url,
           };
           console.log(task);
        }
      });

    
  };
  return (
    <section className="container mx-auto">
      <div className="w-1/3 mx-auto mt-36">
        <div className="bg-white p-4 rounded">
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
                <input
                  type="submit"
                  name="image"
                  value="Add Task"
                  className="w-full cursor-pointer bg-indigo-600 text-white py-2 font-semibold"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;

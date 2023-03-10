import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import Loader from '../../Shared/Loader/Loader';
import TaskCard from '../../Shared/TaskCard/TaskCard';

const CompletedTask = () => {
    const {user} = useContext(AuthProvider)
    const completed = "completed"
    const { data: tasks = [], isLoading, refetch,
      } = useQuery({
        queryKey: ["tasks" , {email : user?.email}],
        queryFn: async () => {
          const res = await fetch(`https://task-manager-server-two.vercel.app/allTask?email=${user?.email}&status=${completed}`);
          const data = res.json();
          return data;
        },
      });
      if(isLoading){
        return <Loader/>
      }


    return (
        <section className='container mx-auto h-screen dark:text-white'>
            <div className='mt-10'>
                    <h2 className='text-2xl text-center font-semibold'>Completed Task {tasks.length}</h2>
            <div className='w-11/12 mx-auto mt-14'>
                <div className='grid md:grid-cols-3 justify-between gap-3 mb-40'>
                    {
                        tasks.map(task => <TaskCard key={task._id} task={task} refetch={refetch}/>)
                    }
                </div>
            </div>
            </div>
        </section>
    );
};

export default CompletedTask;
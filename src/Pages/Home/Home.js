import React, { useContext } from 'react';
import {  BookmarkIcon, BriefcaseIcon, ReceiptRefundIcon } from '@heroicons/react/24/solid'
import { AuthProvider } from '../../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import { Link } from 'react-router-dom';


const Home = () => {

    const {user , loading} = useContext(AuthProvider)    
    const {data : taskCount  , isLoading } = useQuery({
        queryKey : ['count' , {email : user?.email}],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/allTask/count?email=${user?.email}`)
            const data = res.json()
            return data;
        }
    })

    if(isLoading){
        return <Loader/>
    }


    return loading ? <Loader/> :  <section className='container mx-auto mt-16 md:w-2/3 h-screen dark:text-white'>
    <h2 className='text-3xl text-center font-bold'>Task Details</h2>
    <div className='mt-10'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className='mx-5'>
                <div className='bg-white dark:bg-slate-800 p-4 rounded-md flex justify-start items-center gap-6'>
                    <div className='bg-orange-500 p-4 rounded-full '>
                    <BriefcaseIcon className="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>Total Task</h2>
                        <h2 className='font-semibold text-xl mt-2'>
                            {
                                user?.uid ? <>{taskCount?.totalTask}</> : <Link className='text-sm p-1 rounded font-medium text-white underline bg-orange-500' to={'/login'}>Login To See preview</Link>
                            }
                        </h2>
                    </div>
                </div>
            </div>
            <div className='mx-5'>
                <div className='bg-white dark:bg-slate-800 p-4 rounded-md flex justify-start items-center gap-6'>
                    <div className='bg-green-600 p-4 rounded-full '>
                    <BookmarkIcon className="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>Completed Task</h2>
                        
                        <h2 className='font-semibold text-xl mt-2'>
                        {
                                user?.uid ? <>{taskCount?.completedTask}</> : <Link className='text-sm p-1 rounded font-medium text-white underline bg-green-600' to={'/login'}>Login To See preview</Link>
                            }
                        </h2>
                    </div>
                </div>
            </div>
            <div className='mx-5'>
                <div className='bg-white dark:bg-slate-800 p-4 rounded-md flex justify-start items-center gap-6'>
                    <div className='bg-indigo-600 p-4 rounded-full '>
                    <ReceiptRefundIcon className="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>Incomplete Task</h2>
                        <h2 className='font-semibold text-xl mt-2'>
                        {
                                user?.uid ? <>{taskCount?.incompleteTask}</> : <Link className='text-sm p-1 rounded font-medium text-white underline bg-indigo-600' to={'/login'}>Login To See preview</Link>
                            }</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
};

export default Home;
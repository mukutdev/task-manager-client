import React from 'react';
import {  BookmarkIcon, BriefcaseIcon, ReceiptRefundIcon } from '@heroicons/react/24/solid'


const Home = () => {
    return (
        <section className='container mx-auto mt-16 md:w-2/3'>
            <h2 className='text-3xl text-center font-bold'>Task Details</h2>
            <div className='mt-10'>
                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='mx-5'>
                        <div className='bg-white p-4 rounded-md flex justify-start items-center gap-6'>
                            <div className='bg-orange-500 p-4 rounded-full '>
                            <BriefcaseIcon className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h2 className='font-semibold text-xl'>Total Task</h2>
                                <h2 className='font-semibold text-xl mt-2'>20</h2>
                            </div>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='bg-white p-4 rounded-md flex justify-start items-center gap-6'>
                            <div className='bg-green-600 p-4 rounded-full '>
                            <BookmarkIcon className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h2 className='font-semibold text-xl'>Completed Task</h2>
                                <h2 className='font-semibold text-xl mt-2'>20</h2>
                            </div>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className='bg-white p-4 rounded-md flex justify-start items-center gap-6'>
                            <div className='bg-indigo-600 p-4 rounded-full '>
                            <ReceiptRefundIcon className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h2 className='font-semibold text-xl'>Incomplete Task</h2>
                                <h2 className='font-semibold text-xl mt-2'>20</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
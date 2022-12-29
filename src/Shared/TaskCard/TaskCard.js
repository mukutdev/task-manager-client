import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const TaskCard = ({task}) => {

    const {taskName , taskDetails , image, id} = task
    return (
        <div className='mx-4'>
            <div className='bg-white rounded p-4'>
                <div className='flex justify-between'>
                     <h2 className='text-xl font-medium'>{taskName}</h2>
                     <div className='flex gap-1'>
                        <PencilSquareIcon className="h-5 w-5 text-slate-600 cursor-pointer"/>
                        <TrashIcon className="h-5 w-5 text-slate-600 cursor-pointer"/>
                     </div>
                </div>
                <div className='my-3'>
                    <p className='text-sm font-medium'>{taskDetails}</p>
                    <div className='flex justify-between my-5 items-center'>
                        <img src={image} className="h-12 w-12 rounded-full" alt="" />
                        <div>
                        <span className='bg-orange-500 text-white px-4 py-1 rounded-sm'>Incomplete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
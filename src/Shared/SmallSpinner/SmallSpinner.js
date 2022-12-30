import React from 'react';

const SmallSpinner = () => {
    return (
        <div className='flex justify-center items-center h-full'>
      <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin dark:border-white border-slate-800 mt-3'></div>
    </div>
    );
};

export default SmallSpinner;
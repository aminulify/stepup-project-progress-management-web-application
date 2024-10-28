import React from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';

const Progress = () => {
    return (
        <div className='md:flex'>
            <div className='z-30 md:h-[980px] bg-purple-50 md:shadow-lg shadow-sm shadow-purple-500'>
            <DashboardNavbar/>
            </div>
            <div className='my-24 text-[var(--primaryFontColor)] mx-8 md:max-w-[800px] md:mx-auto'>
             Progress
            </div>
        </div>
    );
};

export default Progress;
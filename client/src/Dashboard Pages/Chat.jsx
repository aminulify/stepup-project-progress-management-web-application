import React from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';

const Chat = () => {
    return (
        <div className='md:flex'>
        <div className='z-30 md:h-[980px] bg-purple-50'>
        <DashboardNavbar/>
        </div>
        <div className='my-24 text-[var(--primaryFontColor)] mx-8 md:max-w-[800px] md:mx-auto'>
         Chat
        </div>
    </div>
    );
};

export default Chat;
import React from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { FiPlus } from "react-icons/fi";
import { users } from '../../public/data';
import TeamTable from '../Components/TeamTable';

const Task = () => {
    const userData = users;

    return (
        <div className='md:flex'>
            <div className='z-30 md:h-[980px] bg-purple-50'>
            <DashboardNavbar/>
            </div>
            <div className='md:my-20 my-5 text-[var(--primaryFontColor)] mx-5 md:w-[900px] md:mx-auto'>

             <header className='w-full flex justify-between items-center'>
                <h2 className='text-xl font-medium'>Team Members</h2>
                <button className='flex gap-1 items-center py-2 px-4 bg-purple-500 font-medium text-white rounded-md hover:bg-purple-600 duration-300'><FiPlus/> Add New User</button>
             </header>

             <TeamTable userData={userData}/>
            </div>
        </div>
    );
};

export default Task;
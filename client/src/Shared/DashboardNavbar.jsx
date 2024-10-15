import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdDashboard, MdTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { RiProgress3Fill, RiProgress3Line } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { FaClipboardCheck, FaClipboardList, FaTrashCan, FaUsers } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

const DashboardNavbar = () => {
    const [dashboardNavBtn, setDashboardNavBtn] = useState(false);
    return (
        <div className='text-[var(--primaryFontColor)]'>
            <header className='z-10 mx-8 py-5 w-[150px]'>
                <Link className='cursor-pointer'>
                    <img src="../../public/logo.png" alt="" />
                </Link>
            </header>
            <div className={`absolute top-0 block lg:block shadow-lg shadow-purple-300`}>
            <nav className='w-[70px] md:w-[200px] h-screen bg-purple-50 list-none flex flex-col items-center'>
                <div className=''>
                    <aside className={`w-[180px] px-8 py-5 md:block hidden`}>
                        <Link to="/"><img src="../../public/logo.png" alt="" /></Link>
                    </aside>
                    <aside className='py-8 px-2 text-purple-700'>
                        <Link to="/user/dashboard"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><MdDashboard className="text-3xl md:text-xl"/> <div className="md:block hidden">Dashboard</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 md:block hidden' />

                        <Link to="/user/task"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaClipboardCheck className="text-3xl md:text-xl"/> <div className="md:block hidden">Task</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 md:block hidden' />

                        <Link to="/user/progress"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><RiProgress3Fill className="text-3xl md:text-xl"/> <div className="md:block hidden">Progress</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 md:block hidden' />

                        <Link to="/user/todo"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaClipboardList className="text-3xl md:text-xl"/> <div className="md:block hidden">Todo</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 md:block hidden' />

                        <Link to="/user/team"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaUsers className="text-3xl md:text-xl"/> <div className="md:block hidden">Team</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 md:block hidden' />

                        <Link to="/user/trash"><li className='md:py-1 py-4 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaTrashCan  className="text-3xl md:text-xl"/> <div className="md:block hidden">Trash</div></li></Link>
                    </aside>
                    
                </div>
                <p className='absolute bottom-0 text-sm p-5 text-[var(--primaryFontColor)] md:block hidden'>&copy; 2024 StepUp</p>
            </nav>

            </div>
        </div>
    );
};

export default DashboardNavbar;
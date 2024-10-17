import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { RiProgress3Fill } from "react-icons/ri";
import { FaClipboardList, FaTrashCan, FaUsers } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import { AuthContext } from '../AuthProvider/AuthProvider';
import DashboardResponsiveNav from '../AuthProvider/DashboardResponsiveNav';
import useStore from './Zustand';

const DashboardNavbar = () => {
    const {user} = useContext(AuthContext);
    const {showMenu} = useStore();
    console.log(showMenu)
    return (
        <div className='text-[var(--primaryFontColor)]'>

            <DashboardResponsiveNav/>
           
            <div className={`md:block ${showMenu ? "absolute top-0 mt-20 md:mt-0" : "hidden"} shadow-lg shadow-purple-300`}>
            <nav className='w-[220px] h-screen bg-purple-50 list-none flex flex-col items-center'>
                <div className=''>
                    <aside className={`w-[180px] px-8 py-5 `}>
                        <Link to="/"><img src="../../public/logo.png" alt="" /></Link>
                    </aside>
                    <aside className='md:py-8 py-2 px-2 text-purple-700'>
                        <Link to="/user/dashboard"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><MdDashboard className="text-[20px] md:text-xl"/> <div className="">Dashboard</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/tasks"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><GrTasks className="text-[20px] md:text-xl"/> <div className="">Tasks</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/completed"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaCheckCircle className="text-[20px] md:text-lg"/> <div className="">Completed</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/in-progress"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><RiProgress3Fill className="text-[22px] md:text-xl"/> <div className="">In Progress</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/todo"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaClipboardList className="text-[20px] md:text-xl"/> <div className="">Todo</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />
                        

                        <Link to="/user/team"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaUsers className="text-[20px] md:text-xl"/> <div className="">Team</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/team-chat"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><IoIosChatbubbles className="text-[20px] md:text-xl"/> <div className="">Chat</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/trash"><li className='md:py-1 py-3 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center'><FaTrashCan  className="text-[20px] md:text-lg"/> <div className="">Trash</div></li></Link>
                    </aside>
                    
                </div>
                <p className='absolute bottom-0 text-sm p-5 text-[var(--primaryFontColor)] '>&copy; 2024 StepUp</p>
            </nav>

            </div>
        </div>
    );
};

export default DashboardNavbar;
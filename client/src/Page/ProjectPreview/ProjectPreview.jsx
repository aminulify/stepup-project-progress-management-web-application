import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";

const ProjectPreview = () => {
    const [dashboard, setDashboard] = useState(true);
    const [task, setTask] = useState(false);
    const [progress, setProgress] = useState(false);
    const [todo, setTodo] = useState(false);
    const [team, setTeam] = useState(false);

    const handleDashboard = () =>{
        setDashboard(true);
        setTask(false);
        setProgress(false);
        setTodo(false);
        setTeam(false);
    
    }
    const handleTask = () =>{
        setDashboard(false);
        setTask(true);
        setProgress(false);
        setTodo(false);
        setTeam(false);
    
    }
    const handleProgress = () =>{
        setDashboard(false);
        setTask(false);
        setProgress(true);
        setTodo(false);
        setTeam(false);
    
    }
    const handleTodo = () =>{
        setDashboard(false);
        setTask(false);
        setProgress(false);
        setTodo(true);
        setTeam(false);
    
    }
    const handleTeam = () =>{
        setDashboard(false);
        setTask(false);
        setProgress(false);
        setTodo(false);
        setTeam(true);
    
    }
    
    return (
        <section className='max-w-[1000px] lg:mx-auto md:mx-10 mx-5 relative'>
            <div className='text-[var(--primaryFontColor)] mb-16'>

            <div className='absolute md:top-[200px] right-0 top-[180px] md:w-[400px] w-[100px] h-[100px] lighting-effect -z-20'></div>
            <div className='absolute -z-20 md:top-[100px] top-[90px]  md:w-[400px] w-[100px] h-[100px] lighting2-effect'></div>

                <nav className='flex gap-4 justify-center'>
                    <aside className='text-center flex flex-col'>
                        <div onClick={handleDashboard} className={`text-2xl md:text-4xl md:h-[70px] h-[50px] md:w-[70px] w-[50px] flex justify-center items-center rounded-lg border-[2px] hover:text-purple-500 hover:border-purple-500 duration-300 cursor-pointer ${dashboard ? "text-purple-500 border-purple-500":"border-[var(--primaryFontColor)]"}`}>
                            <BiSolidDashboard />
                            
                        </div>
                        <p className='text-sm font-semibold mt-1 md:block hidden'>Dashboard</p>
                    </aside>
                    <aside className='text-center flex flex-col'>
                        <div onClick={handleTask} className={`text-2xl md:text-4xl md:h-[70px] h-[50px] md:w-[70px] w-[50px] flex justify-center items-center rounded-lg border-[2px] hover:text-purple-500 hover:border-purple-500 duration-300 cursor-pointer ${task ? "text-purple-500 border-purple-500":"border-[var(--primaryFontColor)]"}`}>
                            <MdAddTask />
                            
                        </div>
                        <p className='text-sm font-semibold mt-1 md:block hidden'>Tasks</p>
                    </aside>
                    <aside className='text-center flex flex-col'>
                        <div onClick={handleProgress} className={`text-2xl md:text-4xl md:h-[70px] h-[50px] md:w-[70px] w-[50px] flex justify-center items-center rounded-lg border-[2px] hover:text-purple-500 hover:border-purple-500 duration-300 cursor-pointer ${progress ? "text-purple-500 border-purple-500":"border-[var(--primaryFontColor)]"}`}>
                            <RiProgress3Line />
                            
                        </div>
                        <p className='text-sm font-semibold mt-1 md:block hidden'>Progress</p>
                    </aside>
                    <aside className='text-center flex flex-col'>
                        <div onClick={handleTodo} className={`text-2xl md:text-4xl md:h-[70px] h-[50px] md:w-[70px] w-[50px] flex justify-center items-center rounded-lg border-[2px] hover:text-purple-500 hover:border-purple-500 duration-300 cursor-pointer ${todo ? "text-purple-500 border-purple-500":"border-[var(--primaryFontColor)]"}`}>
                            <LuClipboardCheck />
                            
                        </div>
                        <p className='text-sm font-semibold mt-1 md:block hidden'>Todo</p>
                    </aside>
                    <aside className='text-center flex flex-col'>
                        <div onClick={handleTeam} className={`text-2xl md:text-4xl md:h-[70px] h-[50px] md:w-[70px] w-[50px] flex justify-center items-center rounded-lg border-[2px] hover:text-purple-500 hover:border-purple-500 duration-300 cursor-pointer ${team ? "text-purple-500 border-purple-500":"border-[var(--primaryFontColor)]"}`}>
                            <FaUsers />
                            
                        </div>
                        <p className='text-sm font-semibold mt-1 md:block hidden'>Team</p>
                    </aside>
                    
                </nav>

                <section>
                    <div className='mt-8 shadow-lg'>
                        {
                            dashboard && (
                                <div className='p-5 rounded-lg backdrop-blur-2xl border-[1.5px] border-purple-500 z-10'>
                                    <img src="../../../public/project/1.jpg" className='rounded-md shadow-md' alt="Project Preview Image" />
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-8 shadow-lg'>
                        {
                            task && (
                                <div className='p-5 rounded-lg backdrop-blur-2xl border-[1.5px] border-purple-500 z-10'>
                                    <img src="../../../public/project/2.jpg" className='rounded-md shadow-md' alt="Project Preview Image" />
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-8 shadow-lg'>
                        {
                            progress && (
                                <div className='p-5 rounded-lg backdrop-blur-2xl border-[1.5px] border-purple-500 z-10'>
                                    <img src="../../../public/project/4.jpg" className='rounded-md shadow-md' alt="Project Preview Image" />
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-8 shadow-lg'>
                        {
                            todo && (
                                <div className='p-5 rounded-lg backdrop-blur-2xl border-[1.5px] border-purple-500 z-10'>
                                    <img src="../../../public/project/5.jpg" className='rounded-md shadow-md' alt="Project Preview Image" />
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-8 shadow-lg'>
                        {
                            team && (
                                <div className='p-5 rounded-lg backdrop-blur-2xl border-[1.5px] border-purple-500 z-10'>
                                    <img src="../../../public/project/6.jpg" className='rounded-md shadow-md' alt="Project Preview Image" />
                                </div>
                            )
                        }
                    </div>
                    
                </section>

            </div>
        </section>
    );
};

export default ProjectPreview;
import React, { useContext, useEffect, useState } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { FiPlus } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import ProgressTaskDetails from '../Components/ProgressTaskDetails';
import TaskListView from '../Components/TaskListView';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Task = () => {
    const {user} = useContext(AuthContext);
    const [boardView, setBoardView] = useState(true);
    const [listView, setListView] = useState(false);
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState([]);

    const handleTask = async () => {
                try {
                    setLoading(true);
            
                    // Fetch user data
                    const userRes = await axios.get('http://localhost:3000/api/user-data');
                    const userData = userRes.data;
                    const findUser = userData.filter(data => data.email === user.email);
            
                    if (findUser.length > 0) {
            
                        // Fetch tasks after getting user data
                        const taskRes = await axios.get('http://localhost:3000/api/tasks');
                        const taskData = taskRes.data;
                        const taskMatchWithAdmin = taskData.filter(data => data.adminEmail === findUser[0].adminEmail);
                        setTask(taskMatchWithAdmin);
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };
            
            useEffect(() => {
                handleTask();
            }, []);

    const progressDataOnly = task.filter(data => data.stage === "in-progress" && data.stage !== "delete");

    const handleBoardView = () =>{
        setBoardView(true);
        setListView(false);
    }

    const handleListView = () =>{
        setBoardView(false);
        setListView(true);
    }

    return (
        <div className='md:flex'>
            <div className='z-30 md:h-[980px] bg-purple-50'>
            <DashboardNavbar/>
            </div>
            <div className='md:my-20 my-5 text-[var(--primaryFontColor)] mx-6 md:w-[74%] md:mx-auto'>
             <header className='w-full'>
                <h2 className='text-xl font-medium'>In Progress</h2>
             </header>
             
             <div className='text-left flex gap-5 my-2'>
                <button onClick={handleBoardView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${boardView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><RxDashboard/>Board View</button>
                <button onClick={handleListView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${listView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><IoListOutline/> List View</button>
             </div>

             <section>

                <div className='w-full my-5'>
                    
                    <div className='flex justify-between gap-2 items-center py-1.5 px-2 bg-purple-50'>
                        <aside className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                            <div className=''>In Progress</div>
                        </aside>
                        <div className='text-right'><FiPlus/></div>
                    </div>
                </div>

             </section>

            {
                listView ? <section>
                <TaskListView taskData={progressDataOnly} handleTask={handleTask}/>
             </section> : <section>
                <ProgressTaskDetails taskData={task} loading={loading} />
             </section>
            }
             
            </div>
        </div>
    );
};

export default Task;
import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { FiPlus } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import TaskDetails from '../Components/TaskDetails';
import TaskListView from '../Components/TaskListView';
import axios from 'axios';
import CreateTask from './CreateTask';

const Task = () => {
    const [boardView, setBoardView] = useState(true);
    const [listView, setListView] = useState(false);
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    // console.log(task);

    const handleTask = () =>{
        axios.get('http://localhost:3000/api/tasks')
        .then(res => {
            setTask(res.data);
            setLoading(false);
        })
        .catch(e => console.log(e))
    }

    useEffect(()=>{
        setLoading(true);
        handleTask();
    },[])

    // const task = summary.last10Task;
    const taskData = task.filter(data => data.stage !== "delete");
    // console.log("taskdata",task);
    // console.log("taskNote",task.notes[0]);

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
            {
                modal && <CreateTask setModal={setModal}/>
            }
            <div className='md:my-20 my-5 text-[var(--primaryFontColor)] mx-6 md:w-[74%] md:mx-auto'>
             <header className='w-full flex justify-between items-center'>
                <h2 className='text-xl font-medium'>Tasks</h2>
                <button onClick={()=>setModal(true)} className='flex gap-1 items-center py-2 px-4 bg-purple-500 font-medium text-white rounded-md hover:bg-purple-600 duration-300'><FiPlus/> Create Task</button>
             </header>
             
             <div className='text-left flex gap-5 my-2'>
                <button onClick={handleBoardView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${boardView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><RxDashboard/>Board View</button>
                <button onClick={handleListView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${listView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><IoListOutline/> List View</button>
             </div>

             <section>

                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div className='flex justify-between gap-2 items-center py-1.5 px-2 bg-purple-50'>
                        <aside className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                            <div className='text-sm font-medium'>To Do</div>
                        </aside>
                        <div className='text-right md:block hidden'><FiPlus/></div>
                    </div>
                    <div className='flex flex-wrap justify-between gap-2 items-center py-1.5 px-2 bg-purple-50'>
                        <aside className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                            <div className='text-sm font-medium'>In Progress</div>
                        </aside>
                        <div className='text-right md:block hidden'><FiPlus/></div>
                    </div>
                    <div className='flex justify-between gap-2 items-center py-1.5 px-2 bg-purple-50'>
                        <aside className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-green-500'></div>
                            <div className='text-sm font-medium'>Completed</div>
                        </aside>
                        <div className='text-right md:block hidden'><FiPlus/></div>
                    </div>
                </div>

             </section>


             {
                listView ? <section>
                <TaskListView taskData={taskData} handleTask={handleTask}/>
             </section> : <section>
                <TaskDetails taskData={taskData} loading={loading}/>
             </section>
             }
            </div>
        </div>
    );
};

export default Task;
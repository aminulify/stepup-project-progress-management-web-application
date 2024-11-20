import React, { useState } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { FiPlus } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { summary } from '../../public/data';
import TaskDetails from '../Components/TaskDetails';
import CompletedTaskDetails from '../Components/CompletedTaskDetails';
import TaskListView from '../Components/TaskListView';

const Task = () => {
    const [boardView, setBoardView] = useState(true);
    const [listView, setListView] = useState(false);

    const taskData = summary.last10Task;
    const completedDataOnly = taskData.filter(data => data.stage === "completed" && data.stage !== "delete");

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
            <div className='md:my-20 my-5 text-[var(--primaryFontColor)] mx-5 md:w-[900px] md:mx-auto'>
             <header className='w-full'>
                <h2 className='text-xl font-medium'>Completed</h2>
             </header>
             
             <div className='text-left flex gap-5 my-2'>
                <button onClick={handleBoardView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${boardView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><RxDashboard/>Board View</button>
                <button onClick={handleListView} className={`bg-purple-50 hover:bg-purple-100 duration-300 px-2 py-1 ${listView ? "border-purple-500" : "border-purple-50"} border-b-[1.5px] flex gap-1 items-center`}><IoListOutline/> List View</button>
             </div>

             <section>

                <div className='w-full my-5'>
                    
                    <div className='flex justify-between gap-2 items-center py-1.5 px-2 bg-purple-50'>
                        <aside className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-green-500'></div>
                            <div className=''>Completed</div>
                        </aside>
                        <div className='text-right'><FiPlus/></div>
                    </div>
                </div>

             </section>

            {
                listView ? <section>
                <TaskListView taskData={completedDataOnly}/>
             </section> : <section>
                <CompletedTaskDetails taskData={taskData}/>
             </section>
            }
             
            </div>
        </div>
    );
};

export default Task;
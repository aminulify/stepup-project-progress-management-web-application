import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { GoDot } from 'react-icons/go';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineStickyNote2 } from 'react-icons/md';
import { TbSubtask } from "react-icons/tb";

const CompletedTaskDetails = ({taskData}) => {
    console.log("subdata",taskData[0].note.length)
    const completedDataOnly = taskData.filter(data => data.stage === "completed");

    const ICONS = {
        high: <MdKeyboardDoubleArrowUp/>,
        medium: <MdKeyboardArrowUp/>,
        normal: <GoDot />,
        low: <MdKeyboardArrowDown/>
    }

    const setPriorityColor = {
        high: "text-red-500",
        medium: "text-orange-500",
        normal: "text-green-500",
        low: "text-yellow-500",
    }

    const StageColor = {
        todo: "bg-blue-500",
        completed: "bg-green-500",
        "in progress": "bg-orange-500" 
    }

    const RoleColor = {
        Admin: "bg-green-500",
        Designer: "bg-purple-500",
        Developer: "bg-blue-500",
        Tester: "bg-red-700",
        Manager: "bg-green-700"
    }

    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                completedDataOnly.map(task => (
                    <div key={task._id} className='p-2 rounded-md border-[1.4px] border-purple-200 hover:border-purple-500 duration-300 cursor-pointer'>
                        <aside className={`flex gap-1 items-center text-sm ${setPriorityColor[task.priority]}`}>
                            <div>{ICONS[task.priority]}</div>
                            <p className={`${task.ICONS} text-[12px] font-medium`}>{task.priority.toUpperCase()} PRIORITY</p>
                        </aside>
                        
                        <div className='flex items-center gap-1 pt-1 text-sm font-medium'>
                            <div className={`w-2 h-2 rounded-full ${StageColor[task.stage]}`}></div>
                            <span>{task.title.length > 30 ? task.title.slice(0,30)+"..." : task.title}</span>
                        </div>

                        <p className='text-sm'>{task.date.slice(0,10)}</p>

                        <div className='flex justify-between my-1 py-2 border-t-[1.3px] border-b-[1.3px] border-purple-200'>
                            <section className='flex gap-2 items-center'>
                                <aside className='flex gap-1 items-center'>
                                    <MdOutlineStickyNote2/>
                                    <div className='text-sm'>3</div>
                                    {/* <div>{task.team.length}</div> */}
                                </aside>

                                <aside className='flex gap-1 items-center'>
                                    <TbSubtask/>
                                    <div className='text-sm'>{task.subTasks.length}</div>
                                </aside>
                            </section>

                            <section className='flex'>
                                {
                                    task.team.map(data => (
                                        <div className={`p-1 rounded-full ${RoleColor[data.role]} text-white text-[8px]`}>{data.name.slice(0,2).toUpperCase()}</div>
                                    ))
                                }
                            </section>
                        </div>

                        <div className='text-sm'>
                            {task.subTasks[0].title}
                        </div>

                        <div className='text-sm flex justify-between items-center py-2'>
                            <div>{task.subTasks[0].date.slice(0,10)}</div>

                            <div className='text-sm font-medium px-2 rounded-full text-purple-500 bg-purple-100'>
                                {task.subTasks[0].tag}
                            </div>
                        </div>

                        <div className='flex items-center gap-1 text-purple-900 hover:text-purple-500 duration-300'>
                            <BiPlus/>
                            <p className='text-[14px]'>ADD SUBTASK</p>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default CompletedTaskDetails;
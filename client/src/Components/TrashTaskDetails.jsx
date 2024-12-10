import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiPlus } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { GoDot } from 'react-icons/go';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineDeleteOutline, MdOutlineRestore, MdOutlineStickyNote2 } from 'react-icons/md';
import { TbSubtask } from "react-icons/tb";

const TrashTaskDetails = ({taskData, loading, handleTasks}) => {

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
        todo: "bg-orange-500",
        completed: "bg-green-500",
        "in-progress": "bg-blue-500" 
    }

    const RoleColor = {
        Admin: "bg-green-500",
        Designer: "bg-purple-500",
        Developer: "bg-blue-500",
        Tester: "bg-red-700",
        Manager: "bg-green-700"
    }

    const handleRestore = (id) =>{
        console.log(id);

        axios.patch(`http://localhost:3000/api/tasks/${id}`, {stage: 'todo'})
        .then(res => {
            if(res.data.message){
                console.log(res.data.message)
                handleTasks();
                toast.success('Successfully Restored');
            }
        })
        .catch(err => {
            console.log(err)
            toast.error('Something went wrong!')
        })

    }

    const handleTaskDelete = (id) =>{
        console.log(id);

        axios.delete(`http://localhost:3000/api/tasks/${id}`)
        .then(res => {
            if(res.data.message){
                console.log(res.data.message);
                handleTasks();
                toast.success('Successfully Deleted');
            }
        })
        .catch(err => {
            console.log(err);
            toast.error('Something went wrong!')
        })
    }

    return (
        <section>
            <Toaster />
            {
                !loading ? <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    taskData.map(task => (
                        <div key={task._id} className=' p-2 rounded-md border-[1.4px] border-purple-200 hover:border-purple-500 duration-300 cursor-pointer'>
                            <aside className={`flex gap-1 items-center text-sm ${setPriorityColor[task.taskPrioirty]}`}>
                                <div>{ICONS[task.taskPrioirty]}</div>
                                <p className={`${task.ICONS} text-[12px] font-medium`}>{task.taskPrioirty.toUpperCase()} PRIORITY</p>
                            </aside>
                            
                            <div className='flex items-center gap-1 pt-1 text-sm font-medium'>
                                <div className={`w-2 h-2 rounded-full ${StageColor[task.stage]}`}></div>
                                <span>{task.title.length > 30 ? task.title.slice(0,30)+"..." : task.title}</span>
                            </div>
    
                            <p className='text-sm'>Starting: {task.startingDate.slice(0,10)}</p>
    
                            <div className='flex justify-between my-1 py-2 border-t-[1.3px] border-b-[1.3px] border-purple-200'>
                                <section className='flex gap-2 items-center'>
                                    <aside className='flex gap-1 items-center'>
                                        <MdOutlineStickyNote2/>
                                        <div className='text-sm'>3</div>
                                        {/* <div>{task.team.length}</div> */}
                                    </aside>
    
                                    <aside className='flex gap-1 items-center'>
                                        <TbSubtask/>
                                        <div className='text-sm'>{task.notes.length}</div>
                                    </aside>
                                </section>
    
                                <section className='flex'>
                                    {
                                        task.teamMember.map(member => (
                                            <div>
                                                       {
                                                           member?.imgURL ? <img src={member.imgURL} className='rounded-full h-5 w-5 ' alt="" /> : <div className={`p-1 rounded-full ${RoleColor[member.role]} text-white text-[8px]`}>{member.username.slice(0,2).toUpperCase()}</div> 
                                                       }
                                           </div>   
                                            ) )
                                    }
                                </section>
                            </div>
    
                            <div className='text-sm flex gap-1 items-center'>
                            <TbSubtask className='text-purple-500 text-[16px]'/> {task.subTasks[0].length > 36 ? task.subTasks[0].slice(0,28)+'...' : task.subTasks[0]}
                            </div>
    
                            <div className='text-sm flex justify-between items-center py-2'>
                                <div>Ending: {task.endingDate.slice(0,10)}</div>
    
                                <div className='text-[12px] font-medium px-2 rounded-full text-purple-500 bg-purple-100'>
                                    {task.tags}
                                </div>
                            </div>
    
                            <div className='grid grid-cols-2 gap-3 place-items-center w-full'>
                                <div onClick={()=>handleRestore(task._id)} className='flex items-center gap-1 w-full bg-purple-100 hover:bg-purple-300 duration-200 justify-center rounded-md border-[1px] border-purple-50'>
                                    <MdOutlineRestore />
                                    <p className='text-[14px] font-medium'>Restore</p>
                                </div>
                                    
                                <div onClick={()=>handleTaskDelete(task._id)} className='flex items-center gap-1 border-[1.4px] border-purple-300 hover:border-purple-500 duration-300 w-full justify-center rounded-md'>
                                    <MdOutlineDeleteOutline />
                                    <p className='text-[14px] font-medium'>Delete</p>
                                </div>
                            </div>
    
                        </div>
                    ))
                }
            </div> : <div className='task-skeleton grid md:grid-cols-3 grid-cols-1 gap-5'><div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div>
                <div className="skeleton"></div></div> 
            }
        </section>
    );
};

export default TrashTaskDetails;

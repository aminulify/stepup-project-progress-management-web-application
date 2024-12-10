import React from 'react';
import { GoDot } from 'react-icons/go';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineStickyNote2 } from 'react-icons/md';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { TbSubtask } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const TaskListView = ({taskData}) => {

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
        Manager: "bg-green-700",
        Engineer: "bg-purple-700",
        Marketer: "bg-black",
        "Video Editor": "bg-orange-300",
        "Content Creator": "bg-yellow-500",
        "UI/UX Designer": "bg-slate-400",
        Creator: "bg-pink-500",
        Editor: "bg-pink-700"
    }

    return (
        <div className='p-2 border-[1px] rounded-md border-purple-500'>
            <table className='w-full'>
                
                    <thead>
                        <tr className='text-left bg-purple-500 text-white'>
                            <td className='text-center py-2 font-semibold rounded-l-md'>Task Title</td>
                            <td className='py-2 font-semibold'>Priority</td>
                            <td className='py-2 font-semibold smNone'>Created At</td>
                            <td className='py-2 font-semibold smNone'>Assets</td>
                            <td className='py-2 font-semibold smNone'>Team</td>
                            <td className='text-center py-2 font-semibold rounded-r-md'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        taskData.map(task => (
                            
                                <tr key={task._id} className='border-b-[1px] border-purple-300 bg-white hover:bg-purple-50 duration-300 cursor-pointer'>
                                    <td className='md:text-[16px] text-[14px]'>      
                                        <aside className='flex items-center gap-1'>
                                        <div className={`w-2 h-2 rounded-full ${StageColor[task.stage]}`}></div>
                                        <div>
                                            {task.title}
                                        </div>
                                        </aside>
                                    </td>
                                    <td>
                                        <aside className={`flex gap-1 items-center text-sm ${setPriorityColor[task.taskPrioirty]}`}>
                                            <div>{ICONS[task.taskPrioirty]}</div>
                                            <p className={`${task.ICONS} text-sm font-medium`}>{task.taskPrioirty.slice(0,1).toUpperCase()}{task.taskPrioirty.slice(1,)} Priority</p>
                                        </aside>
                                    </td>
                                    <td className='text-sm smNone'>{task.startingDate.slice(0,10)}</td>

                                    <td className='smNone'>
                                        <div className='flex justify-between'>
                                            <section className='flex gap-2 items-center'>
                                                <aside className='flex gap-1 items-center'>
                                                    <MdOutlineStickyNote2/>

                                                    {/* have TODO  */}
                                                    <div className='text-sm'>3</div>
                            
                                                </aside>

                                                <aside className='flex gap-1 items-center'>
                                                    <TbSubtask/>
                                                    <div className='text-sm'>{task.subTasks.length}</div>
                                                </aside>
                                            </section> 
                                        </div>
                                    </td>

                                    <td className='smNone'>
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
                                    </td>
                                    <td className='flex gap-1 py-2 justify-center'>
                                        <Link to={task._id} className='text-xl p-1 rounded-sm bg-purple-50 hover:bg-purple-200 cursor-pointer duration-300'><RiEditBoxLine/></Link>
                                        <div className='text-xl p-1 rounded-sm bg-purple-50 hover:bg-purple-200 cursor-pointer duration-300'><RiDeleteBinLine/></div>
                                    </td>
                                </tr>     
                        ))
                    }
                    </tbody>
               
            </table>
        </div>
    );
};

export default TaskListView;





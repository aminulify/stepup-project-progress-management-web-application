import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNavbar from '../../Shared/DashboardNavbar';
import { SlCalender } from "react-icons/sl";
import Loading from '../../Shared/Loading';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineDeleteOutline, MdOutlineStickyNote2 } from "react-icons/md";
import { GoDot, GoDotFill } from "react-icons/go";
import { TbSubtask } from "react-icons/tb";
import { FaRegEdit } from 'react-icons/fa';

const TaskRouteDetails = () => {
    const id = useParams();
    const [taskDetails, setTaskDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(taskDetails.title)

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:3000/api/tasks/${id.id}`)
        .then(res => {
            setTaskDetails(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    },[])

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
        todo: "text-orange-500",
        completed: "text-green-500",
        "in-progress": "text-blue-500" 
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

    console.log("data",taskDetails);
    return (
        <div className='md:flex'>
            <div className='z-30 md:h-[980px] bg-purple-50'>
            <DashboardNavbar/>
            </div>
            {
                !loading ? <div className='text-purple-900 md:mt-24 md:mb-10 my-5 md:w-[900px] text-left md:mx-auto mx-5'>
                <h2 className='font-semibold text-xl md:text-2xl text-purple-500'>{taskDetails.title}</h2>
                <div className='md:flex justify-between my-2'>
                    <p className='flex gap-1.5 items-center'><SlCalender className='text-purple-500'/> <div><span className='font-medium'> Starting Date:</span> {taskDetails.startingDate}</div></p>
                    <p className='flex gap-1.5 items-center  md:py-0 py-2'><SlCalender className='text-purple-500'/> <div><span className='font-medium'> Ending Date:</span> {taskDetails.startingDate}</div></p>
                </div>

                <p className='py-1'>{taskDetails.description}</p>
                <div className='py-2'>
                {
                    taskDetails?.notes?.map(note => (
                        <div className='flex gap-2 items-center text-md font-medium'><MdOutlineStickyNote2 className='text-lg'/><p>{note}</p></div>
                    ))
                }
                </div>
                <div className='py-2 flex justify-between'>
                    <p className='flex gap-1 items-center'><GoDotFill className={`${StageColor[taskDetails.stage]} text-lg`}/><span>Stage: </span><span className={`uppercase font-semibold text-purple-500`}>{taskDetails.stage}</span></p>

                    <p className='px-3 py-1 bg-purple-100 rounded-full font-medium text-sm'>{taskDetails.tags}</p>
                </div>

                <div className='py-2'>
                        {
                           taskDetails?.teamMember?.map(member => (
                            <div className='flex items-center gap-3 mb-2'>
                                <div>
                                    {
                                        member?.imgURL ? <img src={member.imgURL} className='rounded-full h-10 w-10 ' alt="" /> : <div className={`p-2.5 rounded-full ${RoleColor[member.role]} text-white text-sm`}>{member.username.slice(0,2).toUpperCase()}</div> 
                                    }
                                </div>
                                <div>
                                    <p className='font-semibold'>{member.email}</p>
                                    <p className='text-sm'>{member.role}</p>
                                </div>
                            </div>
                           )) 
                        }
                </div>

                <div className='py-2'>
                    {
                        taskDetails?.subTasks?.map(task => (
                            <div className='font-medium flex gap-2 items-center'><TbSubtask className='text-lg text-purple-500'/><span>{task}</span></div>
                        ))
                    }
                </div>


                
                <div className='flex gap-3 my-3'>
                    <button className={`flex gap-1 items-center justify-center bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md md:w-[20%] w-[40%] py-2`}><FaRegEdit /> Update</button>
                    <button className='flex gap-1 items-center justify-center border-[1.3px] border-purple-500 rounded-md md:w-[20%] w-[40%] py-2 hover:border-red-500 hover:text-red-500 duration-300'><MdOutlineDeleteOutline className='text-lg' /> Delete</button>
                </div>
            </div> : <Loading></Loading>
            }
        </div>
    );
};

export default TaskRouteDetails;
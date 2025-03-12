import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UpdateData = ({taskDetails, setModal}) => {
    const id = useParams();
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    const [memberFromTask, setMemberFromTask] = useState([]);
    const [taskStage, setTaskStage] = useState(taskDetails.stage);
    const [taskPrioirty, setTaskPrioirty] = useState(taskDetails.taskPrioirty);
    
    const handleMemberEmail = () =>{
        axios.get(`https://stepup-task-manager.aminulify.com/api/tasks/${id.id}`)
        .then(res => {
            setMemberFromTask(res.data.teamMember);
        })
    }
    useEffect(()=>{
        handleMemberEmail();
    },[])

    const handleUpdateTaskData = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const startingDate = form.startingDate.value;
        const endingDate = form.endingDate.value;
        const stage = taskStage;
        const prioirty = taskPrioirty;
        const notes = form.noteText.value;
        const subTask = form.subTask.value;
        const tags = form.tags.value;
        const teamMember = memberFromTask;


        axios.put(`https://stepup-task-manager.aminulify.com/api/tasks/${id.id}`, {title, adminEmail: taskDetails.adminEmail, startingDate, endingDate, taskPrioirty: prioirty, notes: [notes], stage, teamMember, tags, description, subTasks: subTask})
        .then(res => {
            const data = res.data;
            toast.success('Successfully Updated');
            setModal(false);
            navigate(-1);
        })
        .catch(e => {
            toast.error('Something went wrong!');
            // console.log(e)
        })
        
        

    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='border-[1.4px] border-purple-400 md:w-[500px] w-[90%] md:h-[500px] h-[650px] fixed left-[50%] translate-x-[-50%] translate-y-[-30%] text-[var(--primaryFontColor)] p-10 rounded-lg bg-white overflow-y-auto mt-10'>
            <h2 className='text-center font-bold text-2xl'>Update Task</h2>
                    <form onSubmit={handleUpdateTaskData} className='flex flex-col gap-3 mt-2'>
                        <div>
                            <label>Title:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' defaultValue={taskDetails.title} placeholder='Task title here' name="title" required/>
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea rows={3} className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Task description here...' name="description" defaultValue={taskDetails.description} required/>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <label>Starting Date:</label>
                                <input type="date" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' defaultValue={taskDetails.startingDate} name="startingDate" required/>
                            </div>
                            <div>
                                <label>Ending Date:</label>
                                <input type="date" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' defaultValue={taskDetails.endingDate} name="endingDate" required/>
                            </div>
                        </div>
                        <div>
                        <label className=''>Task Priority:</label>
                            
                            <select id="rangeSelect" className={`w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer`} onChange={(e) => setTaskPrioirty(e.target.value)} defaultValue={taskDetails.taskPrioirty}>

                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="normal">Normal</option>
                                <option value="low">Low</option>
                            
                        </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Stage:</label>
                            <select className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' defaultValue={taskDetails.stage} onChange={(e) => setTaskStage(e.target.value)}>
                                <option value="todo">Todo</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Note:</label>
                            <textarea placeholder='Note here' className='border border-purple-600 rounded-md p-2 focus:outline-none' name="noteText" defaultValue={taskDetails.notes}></textarea>
                        </div>

                        <div className='flex flex-col'>
                            <label>Sub-Tasks:</label>
                            <textarea placeholder='Sub-Task here' className='border border-purple-600 rounded-md p-2 focus:outline-none' name="subTask" defaultValue={taskDetails.subTasks}></textarea>
                        </div>

                        <div>
                            <label>Tags</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Ex: App/Marketing/Software/Designing/Editing ...' name="tags" defaultValue={taskDetails.tags} required />
                        </div>
                        
                        <div>
                            <label className='font-medium'>Team Member</label>
                        
                                {/* todo  */}
                                {
                                    memberFromTask.map((member, index) => (
                                        <div className='pb-1' key={index}>
                                            <div className='items-center flex gap-1 py-0.5 font-medium text-slate-600'>
                                                {member.username}
                                            </div>
                                            <div className='text-sm text-slate-500'>
                                                {member.role}
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            {/* </select> */}
                        </div>

                        <div className='flex gap-3 mt-1'>
                            <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md w-[30%] py-2`}>Update</button>
                            <button className='border-[1.3px] border-purple-500 rounded-md w-[30%] py-2' onClick={()=>{setModal(false)}}>Cancel</button>
                        </div>
                        
                    </form>
            </div>
        </div>
    );
};

export default UpdateData;
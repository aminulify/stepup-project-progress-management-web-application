import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CreateTask = ({setModal}) => {
    const {user} = useContext(AuthContext);
    const [teamMember, setTeamMember] = useState([]);
    const [selectEmail, setSelectEmail] = useState([]);
    const [taskPrioirty, setTaskPrioirty] = useState('high');
    const [taskStage, setTaskStage] = useState('todo');
    // console.log(selectEmail);
    const [filteredTeamMemberEmail, setFilteredTeamMemberEmail] = useState([]);
    // console.log(filteredTeamMemberEmail);

    const handleCheckboxChange = (e) =>{
        const {value, checked} = e.target;

        // console.log(value, checked);

        axios.get('https://stepup-task-manager.aminulify.com/api/user-data')
        .then(res => {
            const data = res.data;
            // console.log(data);
            const teamMemberEmailFilter = data.filter(memberEmail => memberEmail.email === value);
            setFilteredTeamMemberEmail(teamMemberEmailFilter);
        })


        if(checked){
            const data = {_id: filteredTeamMemberEmail[0]._id, email: filteredTeamMemberEmail[0].email, username: filteredTeamMemberEmail[0].username, role: filteredTeamMemberEmail[0].role, imgURL: filteredTeamMemberEmail[0].imageURL || ''};
            setSelectEmail([...selectEmail, data]);
        }
        else{
            setSelectEmail(selectEmail.filter(option => option.email !== value))
        }
    }

    const handleCreateTask = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const startingDate = form.startingDate.value;
        const endingDate = form.endingDate.value;
        const noteText = [form.noteText.value];
        const subTask = [form.subTask.value];
        const tags = form.tags.value;
        const prioirty = taskPrioirty;
        const stage = taskStage;
        const teamMember = selectEmail;
        const adminEmail = user.email;
        const description = form.description.value;

        const value = {adminEmail, title, startingDate, endingDate, taskPrioirty: prioirty, notes: noteText, stage, teamMember, tags, description, subTasks: subTask};

        fetch('https://stepup-task-manager.aminulify.com/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)
        })
        .then(res => res.json())
        .then(data => {
            setModal(false);
            toast.success('Task Created Successfully!')
        })
        .catch(e => e)
    }


    useEffect(()=>{
        axios.get('https://stepup-task-manager.aminulify.com/api/user-data')
        .then(res => {
            const data = res.data;
            const teamFilter = data.filter(member => member.adminEmail === user.email);
            if(teamFilter){
                setTeamMember(teamFilter);
            }
        })
        .catch(e => e)
    },[])
    return (
        <section className='top-10 w-screen h-screen z-[40] fixed left-0 drop-shadow-xl shadow-purple-500'>

                <Toaster/>
                <div className='md:w-[500px] w-[90%] md:h-[500px] h-[650px] absolute left-[50%] translate-x-[-50%] text-[var(--primaryFontColor)] p-10 rounded-lg mt-5] bg-white overflow-y-auto mt-10'>
                    <h2 className='text-center font-bold text-2xl'>Create New Task</h2>
                    <form onSubmit={handleCreateTask} className='flex flex-col gap-3 mt-2'>
                        <div>
                            <label>Title:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Task title here' name="title" required/>
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea rows={3} className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Task description here...' name="description" required/>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <label>Starting Date:</label>
                                <input type="date" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' name="startingDate" required/>
                            </div>
                            <div>
                                <label>Ending Date:</label>
                                <input type="date" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' name="endingDate" required/>
                            </div>
                        </div>
                        <div>
                        <label className=''>Task Priority:</label>
                            
                            <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' onChange={e => setTaskPrioirty(e.target.value)}>

                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="normal">Normal</option>
                                <option value="low">Low</option>
                            
                        </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Stage:</label>
                            <select className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' onChange={e => setTaskStage(e.target.value)}>
                                <option value="todo">Todo</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Note:</label>
                            <textarea placeholder='Note here' className='border border-purple-600 rounded-md p-2 focus:outline-none' name="noteText"></textarea>
                        </div>

                        <div className='flex flex-col'>
                            <label>Sub-Tasks:</label>
                            <textarea placeholder='Sub-Task here' className='border border-purple-600 rounded-md p-2 focus:outline-none' name="subTask"></textarea>
                        </div>

                        <div>
                            <label>Tags</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Ex: App/Marketing/Software/Designing/Editing ...' name="tags" required />
                        </div>

                        <div>
                            <label>Team Member</label>
                        
                                {/* todo  */}
                                {
                                    teamMember.map((member, index) => (
                                        <div key={index}>
                                            <label className='items-center flex gap-1 py-0.5 font-medium text-slate-500'>
                                                <input type='checkbox' className='accent-purple-500 p-1' value={member.email}
                                                onChange={handleCheckboxChange}
                                                />
                                                {member.email}
                                            </label>
                                        </div>
                                    ))
                                }
                                
                            {/* </select> */}
                        </div>
                        

                        <div className='flex gap-3 mt-1'>
                            <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md w-[30%] py-2`}>Create</button>
                            <button className='border-[1.3px] border-purple-500 rounded-md w-[30%] py-2' onClick={()=>{setModal(false)}}>Cancel</button>
                        </div>
                        
                    </form>
                </div>
               
            </section>
    );
};

export default CreateTask;
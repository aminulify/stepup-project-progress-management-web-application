import React from 'react';

const UpdateData = ({taskDetails, setModal, modal}) => {
    console.log('first', taskDetails);
    return (
        <div>
            <div className='border-[1.4px] border-purple-400 md:w-[500px] w-[90%] md:h-[500px] h-[650px] absolute left-[50%] translate-x-[-50%] translate-y-[-30%] text-[var(--primaryFontColor)] p-10 rounded-lg bg-white overflow-y-auto mt-10'>
            <h2 className='text-center font-bold text-2xl'>Update Task</h2>
                    <form className='flex flex-col gap-3 mt-2'>
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
                            
                            <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' defaultValue={taskDetails.taskPrioirty}>

                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="normal">Normal</option>
                                <option value="low">Low</option>
                            
                        </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Stage:</label>
                            <select className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' defaultValue={taskDetails.stage}>
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
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Ex: App/Marketing/Software/Designing/Editing ...' name="tags" defaultValue={taskDetails.subTasks} required />
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
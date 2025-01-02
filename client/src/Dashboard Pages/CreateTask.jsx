import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CreateTask = ({setModal}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <section className='top-10 w-screen h-screen z-[40] fixed left-0 drop-shadow-xl shadow-purple-500'>
            
                <div className='md:w-[500px] w-[90%] md:h-[500px] h-[650px] absolute left-[50%] translate-x-[-50%] text-[var(--primaryFontColor)] p-10 rounded-lg mt-5] bg-white overflow-y-auto mt-10'>
                    <h2 className='text-center font-bold text-2xl'>Create New Task</h2>
                    <form className='flex flex-col gap-3 mt-2'>
                        <div>
                            <label>Title:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Task title here' name="title" required/>
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
                            
                            <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer'>

                                <option value="Designer">High</option>
                                <option value="Developer">Medium</option>
                                <option value="Engineer">Normal</option>
                                <option value="Manager">Low</option>
                            
                        </select>
                        </div>

                        <div className='flex flex-col'>
                            <label>Stage:</label>
                            <select className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer'>
                                <option value="">Todo</option>
                                <option value="">In Progress</option>
                                <option value="">Completed</option>
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
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Task Tag Here' name="Tags" required />
                        </div>

                        <div>
                            <label>Team Member</label>
                            <select name="" id="">
                                {/* todo  */}
                            </select>
                        </div>
                        

                        <div className='flex gap-3 mt-1'>
                            <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md w-[30%] py-2`}>Update</button>
                            <button className='border-[1.3px] border-purple-500 rounded-md w-[30%] py-2' onClick={()=>{setModal(false)}}>Cancel</button>
                        </div>
                        
                    </form>
                </div>
               
            </section>
    );
};

export default CreateTask;
import axios from 'axios';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateNormalUserData = ({taskDetails, setUserModal}) => {
    const id = useParams();
    const navigate = useNavigate();
    const [taskStage, setTaskStage] = useState(taskDetails.stage);
    // console.log(taskStage);

    const handleUpdateStageData = async(e) =>{
        e.preventDefault();
        const stage = taskStage;

        axios.patch(`https://stepup-task-manager.aminulify.com/api/tasks/${id.id}`, {stage: stage})
        .then(res => {
            const data = res.data;
            // console.log(data);
            toast.success('Successfully Stage Updated!');
            setUserModal(false);
            navigate(-1);

        })
        .catch(err => {
            // console.log(err);
            toast.error('Something went wrong!')
        });
    }
    return (
        <div className='border-[1.4px] border-purple-400 md:w-[500px] w-[90%] md:h-[250px] h-[250px] fixed left-[50%] translate-x-[-50%] translate-y-[-30%] text-[var(--primaryFontColor)] p-10 rounded-lg bg-white overflow-y-auto mt-10'>
            <Toaster/>
            <h2 className='text-center font-bold text-2xl'>Update Stage</h2>
                    <form onSubmit={handleUpdateStageData} className='flex flex-col gap-3 mt-2'>       

                        <div className='flex flex-col'>
                            <label>Stage:</label>
                            <select className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' defaultValue={taskDetails.stage} onChange={(e) => setTaskStage(e.target.value)}>
                                <option value="todo">Todo</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className='flex gap-3 mt-1'>
                            <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md w-[30%] py-2`}>Stage</button>
                            <button className='border-[1.3px] border-purple-500 rounded-md w-[30%] py-2' onClick={()=>{setUserModal(false)}}>Cancel</button>
                        </div>
                    </form>

        </div>
    );
};

export default UpdateNormalUserData;
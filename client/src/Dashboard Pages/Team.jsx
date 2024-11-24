import React, { useContext, useEffect, useState } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { FiPlus } from "react-icons/fi";
import { users } from '../../public/data';
import TeamTable from '../Components/TeamTable';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Task = () => {

    const [newUserModal, setNewUserModal] = useState(false);
    const [teamData, setTeamData] = useState([]);
    const {user} = useContext(AuthContext);

    const handleOpenModal = () =>{
        setNewUserModal(true);
    }

    useEffect(()=>{
        fetch('http://localhost:3000/api/user-data')
        .then(res => res.json())
        .then(data => setTeamData(data))
        .catch(err => console.log(err))
    },[])

    const handleCreateUser = (e) =>{
        e.preventDefault();
        const form = e.target;
        // const username = form.username.value;
        // const email = form.email.value;
        // const password = form.password.value;
        // const adminEmail = user.email;
        // const positionTitle = form.position.value;
        // const isActive = "Active";
        // const userRole = role;

        // const values = {username, email, password, adminEmail, positionTitle, isActive, userRole};
        // console.log("total values",values);

        setNewUserModal(false);
    }
    return (
        <div className='md:flex'>
            <div className='z-30 md:h-[980px] bg-purple-50'>
            <DashboardNavbar/>
            </div>
            <div className='md:my-20 my-5 text-[var(--primaryFontColor)] mx-5 md:w-[900px] md:mx-auto'>

             <header className='w-full flex justify-between items-center'>
                <h2 className='text-xl font-medium'>Team Members</h2>
                <button className='flex gap-1 items-center py-2 px-4 bg-purple-500 font-medium text-white rounded-md hover:bg-purple-600 duration-300' onClick={handleOpenModal}><FiPlus/> Add New User</button>
             </header>

             <TeamTable teamData={teamData}/>

             
            {
                newUserModal && <section onSubmit={handleCreateUser} className='top-10 w-screen h-screen z-[40] fixed left-0 drop-shadow-xl shadow-purple-500'>
            
                <div className='md:w-[500px] w-[90%] md:h-[520px] h-[650px] absolute left-[50%] translate-x-[-50%] text-[var(--primaryFontColor)] p-10 rounded-lg mt-5] bg-white overflow-y-scroll mt-10'>
                    <h2 className='text-center font-bold text-2xl'>Create New User</h2>
                    <form className='my-3 flex flex-col gap-3'>
                        <div>
                            <label>Username:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Username should be unique' name="username" required/>
                        </div>

                        <div className='flex gap-2 px-2 py-2'>
                            <button type='submit' className='px-6 py-2 rounded-md bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl'>Create</button>
                        
                            <button className='px-6 py-2 hover:bg-slate-100 duration-300 rounded-md border-[1.2px] border-purple-500' onClick={()=>setNewUserModal(false)}>Cancel</button>
                            
                        </div>
                    </form>
                </div>
               
            </section>
            }
             
            </div>
        </div>
    );
};

export default Task;
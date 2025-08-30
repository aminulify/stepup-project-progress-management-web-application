import React, { useContext, useState } from 'react';
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const TeamTable = ({teamData, teamDataFetch, setLoading}) => {

    const {user} = useContext(AuthContext);
    const [updateSelectedUser, setUpdateSelectedUser] = useState(); 
    const [openModal, setOpenModal] = useState(false);
    const [userRole, setUserRole] = useState();
    const [active, setActive] = useState("Active");
    const [modalId, setModalId] = useState("");
    // console.log(updateSelectedUser);

    const teamUser = teamData.filter(team => team.adminEmail === user.email);

    // removed from team member 
    const handleDeleteUser = (id) =>{
        setLoading(true);
        // console.log(id);
        axios.patch(`https://stepup-task-manager-api.aminulify.com/api/user-data/${id}`,
            {adminEmail: 'N/A'}
        )
        .then(res => {
            // console.log(res);
            teamDataFetch();
            toast.success('Successfully Removed!')
            setLoading(false);
        })
        .catch(err => {
            // console.log(err);
            toast.error('Something Wrong!')
            setLoading(false);
        })
    }

    // update team member data 
    const handleUpdateUser = (id) =>{
        setLoading(true);

        axios.get(`https://stepup-task-manager-api.aminulify.com/api/user-data/${id}`)
        .then(res => {
            setUpdateSelectedUser(res.data);
            setLoading(false);

            setModalId(id);
            // open modal 
            setOpenModal(true);
        })
        .catch(err => {
            toast.error('Something Wrong!')
            setLoading(false);
        })
    }

    const handleUpdateTeamMemberData = (e) =>{
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const rolePosition = form.rolePosition.value;
        const role = userRole;
        const isActive = active;

        const updateData = {username, rolePosition, role, isActive};
        // console.log(updateData);

        // console.log(`https://stepup-task-manager-api.aminulify.com/user-updated-data/${modalId}`);
        axios.patch(`https://stepup-task-manager-api.aminulify.com/user-update-data/${modalId}`, {username, rolePosition, role, isActive})
        .then(res => {
            setLoading(true);
            // console.log("modal data",res);
            toast.success('Successfully Updated!');
            teamDataFetch();
            setOpenModal(false);
            setLoading(false);
        })
        .catch(err => {
            // console.log(err);
            toast.error('Something Wrong!')
            setLoading(false);
        })
        
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
        <div>
            <Toaster/>

            {
                // username, rolePosition, role, isActive
                openModal && <section className='top-10 w-screen h-screen z-[40] fixed left-0 drop-shadow-xl shadow-purple-500'>
            
                <div className='md:w-[500px] w-[90%] md:h-[500px] h-[650px] absolute left-[50%] translate-x-[-50%] text-[var(--primaryFontColor)] p-10 rounded-lg mt-5] bg-white overflow-y-auto mt-10'>
                    <h2 className='text-center font-bold text-2xl'>Update User Data</h2>
                    <form onSubmit={handleUpdateTeamMemberData} className='flex flex-col gap-3 mt-2'>
                        <div>
                            <label>Username:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Enter username here' name="username" defaultValue={updateSelectedUser?.username || 'Loading...'} required/>
                        </div>
                        <div>
                            <label>Role Position:</label>
                            <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Ex: (Graphic Designer / Frontend Developer / Web Developer)' name="rolePosition" defaultValue={updateSelectedUser?.rolePosition || 'Loading...'} required/>
                        </div>
                        <div>
                        <label className=''>Role:</label>
                            
                            <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' defaultValue={updateSelectedUser?.role || "Loading..."} onChange={(e) => setUserRole(e.target.value)}>
                                <option value="Designer">Designer</option>
                                <option value="Developer">Developer</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Manager">Manager</option>
                                <option value="Marketer">Marketer</option>
                                <option value="Tester">Tester</option>
                                <option value="Video Editor">Video Editor</option>
                                <option value="Content Creator">Content Creator</option>
                                <option value="Admin">Team Admin</option>
                            
                        </select>
                        </div>
                        <div>
                            <label>Activity:</label>
                            <select name="" defaultValue={'Active'} className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md cursor-pointer' onChange={(e)=> setActive(e.target.value)}>
                                <option value="Active">Active</option>
                                <option value="Disable">Disable</option>
                            </select>
                        </div>

                        <div className='flex gap-3 mt-1'>
                            <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] hover:bg-gradient-to-tl text-white duration-300 rounded-md w-[30%] py-2`}>Update</button>
                            <button className='border-[1.3px] border-purple-500 rounded-md w-[30%] py-2' onClick={() => {setOpenModal(false)}}>Cancel</button>
                        </div>
                        
                    </form>
                </div>
               
            </section>
            }

            <table className='w-full my-5'>
                <thead className='bg-purple-500 text-white py-1'>
                    <tr className=''>
                        <td className='text-center py-2 rounded-l-md'>Username</td>
                        <td className='py-2 smNone'>Title</td>
                        <td className='py-2 smNone'>Email</td>
                        <td className='py-2'>Role</td>
                        <td className='py-2'>Active</td>
                        <td className='py-2 rounded-r-md text-center'>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                      teamUser.map(team => (
                            <tr className='border-b-[1.5px]'>
                                <td className='py-2 pl-3'>{team.username.length > 12 ? team.username.slice(0,12) + "." : team.username}</td>
                                <td className='py-2 smNone'>{team.rolePosition}</td>
                                <td className='py-2 smNone'>{team.email}</td>
                                <td className={`flex gap-1 items-center py-2 ${team.role === "Admin" && "font-semibold"}`}>
                                    <div className={`w-2.5 h-2.5 rounded-full ${RoleColor[team.role]}`}></div>
                                    <div>{team.role}</div>
                                </td>
                                <td className='py-2 cursor-pointer'>{team.isActive === 'Active' ? <div className='text-sm font-semibold text-purple-500 hover:text-purple-800 duration-300'>Active</div> : <div className='text-sm font-semibold hover:text-red-700 duration-300 text-red-500'>Disable</div>}</td>
                                <td className='flex gap-1 py-2 justify-center'>
                                    <div onClick={()=> handleUpdateUser(team._id)} className='text-xl p-1 rounded-sm bg-purple-50 hover:bg-purple-200 cursor-pointer duration-300'><RiEditBoxLine/></div>
                                    <div onClick={()=> handleDeleteUser(team._id)} className='text-xl p-1 rounded-sm bg-purple-50 hover:bg-purple-200 cursor-pointer duration-300'><RiDeleteBinLine/></div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default TeamTable;
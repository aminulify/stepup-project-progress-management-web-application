import React, { useContext } from 'react';
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { AuthContext } from '../AuthProvider/AuthProvider';

const TeamTable = ({teamData}) => {

    const {user} = useContext(AuthContext);
    // console.log(teamData);

    const teamUser = teamData.filter(team => team.adminEmail === user.email);

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
            <table className='w-full my-5'>
                <thead className='bg-purple-500 text-white py-1'>
                    <tr className=''>
                        <td className='text-center py-2 rounded-l-md'>Name</td>
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
                                <td className='py-2 cursor-pointer'>{team.isActive ? <div className='text-sm font-semibold text-purple-500 hover:text-purple-800 duration-300'>Active</div> : <div className='text-sm font-semibold hover:text-red-700 duration-300 text-red-500'>Disable</div>}</td>
                                <td className='flex gap-1 py-2 justify-center'>
                                    <div className='text-xl p-1 rounded-sm bg-purple-50 hover:bg-purple-200 cursor-pointer duration-300'><RiEditBoxLine/></div>
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

export default TeamTable;
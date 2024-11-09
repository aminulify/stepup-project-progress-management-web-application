import React from 'react';
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

const TeamTable = ({userData}) => {
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
                        userData.map(user => (
                            <tr className='border-b-[1.5px]'>
                                <td className='py-2 pl-3'>{user.name.length > 12 ? user.name.slice(0,12) + "." : user.name}</td>
                                <td className='py-2 smNone'>{user.title}</td>
                                <td className='py-2 smNone'>{user.email}</td>
                                <td className='py-2'>{user.role}</td>
                                <td className='py-2'>{user.isActive ? <div className='text-sm font-semibold text-purple-500'>Active</div> : <div className='text-sm font-semibold text-red-500'>Disable</div>}</td>
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
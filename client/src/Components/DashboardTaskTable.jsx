import React from 'react';
import { summary } from '../../public/data';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { GoDot } from "react-icons/go";

const DashboardTaskTable = () => {
    const tasks = summary.last10Task;
    const withoutDeleteTask = tasks.filter(data => data.stage !== "delete")
    // console.log("total",tasks);

    const ICONS = {
        high: <MdKeyboardDoubleArrowUp/>,
        medium: <MdKeyboardArrowUp/>,
        normal: <GoDot />,
        low: <MdKeyboardArrowDown/>
    }

    const StageColor = {
        todo: "bg-orange-500",
        completed: "bg-green-500",
        "in progress": "bg-blue-500" 
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
        "UI/UX Designer": "bg-slate-400"
    }
    return (
        <section className="mb-10 mt-8 rounded-lg">

            <div className='w-full h-[400px] overflow-y-auto bg-white shadow-md rounded md:px-4 px-2 md:py-4 py-2 border-[1.4px] border-purple-500'>
                <table className='w-full'>

                <thead className='px-4'>
                    <tr className='text-white bg-purple-500 text-center'>
                        <th className='py-2 md:text-md text-sm'>Task Title</th>
                        <th className='py-2 md:text-md text-sm text-left'>Priority</th>
                        <th className='py-2 md:text-md text-sm text-left'>Team</th>
                        <th className='py-2 md:text-md text-sm hidden md:block'>Created At</th>
                    </tr>
                </thead>

                <tbody>
                    {withoutDeleteTask?.map((task, id) => (
                        
                        <tr key={id} className='text-[var(--primaryFontColor)] bg-white text-left border-b pb-2'>
                            <td className='py-2 md:text-md text-sm'>
                                <div className='flex gap-1 items-center'><div className={`w-3 h-3 rounded-full ${StageColor[task.stage]}`}></div>
                                <p>{task.title}</p></div></td>
                            <td className='py-2 flex gap-1 items-center md:text-md text-sm'><span className='text-purple-500'>{ICONS[task.priority]}</span>{task.priority}</td>
                            <td className='py-2 md:text-md text-sm'>
                                <div className='flex'>{
                                task.team.map(worker => (
                                    <div className={`grid place-content-center border-[1px] border-white w-5 h-5 ${RoleColor[worker.role]} rounded-full text-[10px] font-semibold text-white`}>{worker.name.slice(0,2).toUpperCase()}</div>
                                ))
                                }</div>
                            </td>
                            <td className='py-2 md:text-md text-sm hidden md:block text-center'>{task.createdAt.slice(0,19).replace("T", " T:")}</td>
                        </tr>
                    ))}
                </tbody>

                </table>
            </div>

        </section>
    );
};

export default DashboardTaskTable;
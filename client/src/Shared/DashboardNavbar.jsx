import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { RiProgress3Fill } from "react-icons/ri";
import { FaClipboardList, FaTrashCan, FaUsers } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import { AuthContext } from '../AuthProvider/AuthProvider';
import DashboardResponsiveNav from '../Components/DashboardResponsiveNav';
import useStore from './Zustand';
import Loading from './Loading';
import axios from 'axios';
import logo from '/logo.png';

const DashboardNavbar = () => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user);
    const {showMenu} = useStore();
    const [findUser, setFindUser] = useState(null);
    // console.log(findUser);
    const location = useLocation();
    // console.log(location.pathname);

    const findUserRole = async () => {
        try {
            // Fetch user data
            const userRes = await axios.get('https://stepup-task-manager-api.aminulify.com/api/user-data');
            const userData = userRes.data;
    
            // Find user by email
            const matchUser = userData.filter(data => data.email === user.email);
    
            // Safely set the role if a match is found
            setFindUser(matchUser[0]?.role); 
        } 
        catch (err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        findUserRole();
    }, []);
    return (
        <div className='text-[var(--primaryFontColor)]'>

            {
                loading && <Loading/>
            }

            <DashboardResponsiveNav/>
           
            <div className={`md:block ${showMenu ? "fixed bg-purple-100 h-screen top-0 mt-16 md:mt-0" : "hidden"}` }>
            <nav className='w-[220px] list-none flex flex-col items-center'>
                <div className=''>
                    <aside className={`w-[180px] px-8 py-5 `}>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </aside>
                    <aside className='md:py-8 py-2 px-2 text-purple-700'>
                        <Link to="/user/dashboard"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/dashboard" && "bg-purple-500 text-white"} ${findUser !== 'Admin' && 'hidden'}`}><MdDashboard className="text-[20px] md:text-xl"/> <div className="">Dashboard</div></li></Link>

                        <hr className={`border-[1px] border-purple-500 my-1 ${findUser !== 'Admin' && 'hidden'}`} />

                        <Link to="/user/tasks"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/tasks" && "bg-purple-500 text-white"}`}><GrTasks className="text-[20px] md:text-xl"/> <div className="">Tasks</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/completed"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/completed" && "bg-purple-500 text-white"}`}><FaCheckCircle className="text-[20px] md:text-lg"/> <div className="">Completed</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/in-progress"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/in-progress" && "bg-purple-500 text-white"}`}><RiProgress3Fill className="text-[22px] md:text-xl"/> <div className="">In Progress</div></li></Link>

                        <hr className='border-[1px] border-purple-500 my-1 ' />

                        <Link to="/user/todo"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/todo" && "bg-purple-500 text-white"}`}><FaClipboardList className="text-[20px] md:text-xl"/> <div className="">Todo</div></li></Link>

                        <hr className={`border-[1px] border-purple-500 my-1 ${findUser !== 'Admin' && 'hidden'}`} />
                        

                        <Link to="/user/team"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/team" && "bg-purple-500 text-white"} ${findUser !== 'Admin' && 'hidden'}`}><FaUsers className="text-[20px] md:text-xl"/> <div className="">Team</div></li></Link>

                        <hr className={`border-[1px] border-purple-500 my-1 ${findUser !== 'Admin' && 'hidden'}`} />

                        {/* <Link to="/user/team-chat"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/team-chat" && "bg-purple-500 text-white"}`}><IoIosChatbubbles className="text-[20px] md:text-xl"/> <div className="">Chat</div></li></Link> */}

                        {/* <hr className='border-[1px] border-purple-500 my-1 ' /> */}

                        <Link to="/user/trash"><li className={`py-1 my-1 rounded-sm hover:text-white hover:bg-purple-500 duration-300 cursor-pointer px-5 flex gap-1 items-center ${location.pathname == "/user/trash" && "bg-purple-500 text-white"} ${findUser !== 'Admin' && 'hidden'}`}><FaTrashCan  className="text-[20px] md:text-lg"/> <div className="">Trash</div></li></Link>
                    </aside>
                    
                </div>
                <p className='fixed bottom-0 text-sm p-5 text-[var(--primaryFontColor)] '>Powered By <span className='font-semibold text-purple-700'>Aminulify</span></p>
            </nav>

            </div>
        </div>
    );
};

export default DashboardNavbar;
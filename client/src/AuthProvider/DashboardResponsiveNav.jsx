import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { IoMenuSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import useStore from '../Shared/Zustand';

const DashboardResponsiveNav = () => {
    const {user} = useContext(AuthContext);
    const {showMenu, setShowMenu} = useStore();
    return (
        <div>
            <div className='md:absolute md:right-0 block md:bg-transparent bg-purple-50 py-4 px-5'>
                <aside className='flex justify-between items-center'>

                    <div className='p-1 cursor-pointer md:hidden block'>
                        <IoMenuSharp onClick={()=>{setShowMenu(!showMenu)}} className='text-3xl'/>
                    </div>
                    {/* <h2>AMinul</h2> */}
                    <div className='flex items-center md:gap-5 gap-3'>
                            <input type="search" className='md:w-[300px] border-[1.4px] p-2 rounded-lg border-purple-500 outline-none' placeholder="search" />
                            <IoNotifications className='text-xl cursor-pointer hover:text-purple-600 duration-300'/>

                            <div>
                            {
                                user ? <img src={user?.photoURL} className='w-[50px] h-[50px] rounded-full p-1 object-center object-cover cursor-pointer' alt="" /> : <div className='text-2xl font-bold bg-purple-500 w-[50px] h-[50px] rounded-full text-white cursor-pointer'>{user?.displayName[0]}</div>
                            }
                            </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardResponsiveNav;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useStore from '../Shared/Zustand';

const DashboardResponsiveNav = () => {
    const {user} = useContext(AuthContext);
    const {showMenu, setShowMenu} = useStore();
    const [validImg, setValidImg] = useState(false);

    useEffect(()=>{
        if(!user?.photoURL){
            return setValidImg(false);
        }

        const img = new Image();
        img.onload = () => setValidImg(true);
        img.onerror = () => setValidImg(false);
    },[user])
    return (
        <div>
            <div className='md:w-[700px] md:absolute md:right-0 block md:bg-transparent bg-purple-100 py-4 px-5'>
                <aside className='flex justify-between items-center'>

                    <div className='p-1 cursor-pointer md:hidden block'>
                        {
                            showMenu ? <IoClose onClick={()=>{setShowMenu(!showMenu)}} className='text-3xl animate-pulse'/> : <IoMenuSharp onClick={()=>{setShowMenu(!showMenu)}} className='text-3xl'/>
                        }
                    </div>
                    
                    <div className='flex items-center gap-4'>
                            <input type="search" className='md:w-[500px] w-[200px] border-[1.4px] p-2 rounded-lg bg-white border-purple-500 outline-none' placeholder="Search" />

                            <div className='bg-white shadow-sm shadow-purple-200 rounded-lg'>
                            {
                                validImg && user ? <div className="flex gap-1 items-center px-2 py-[4.5px] border-[1.5px] border-purple-500 rounded-lg"><img src={user.photoURL} className='w-[30px] h-[30px] rounded-full object-center object-cover cursor-pointer' alt="" /> <span className="text-[16px] font-medium">{user?.displayName.slice(0,6)}.</span></div> : <div className="flex gap-1 items-center px-2 py-[4.5px] border-[1.5px] border-purple-500 rounded-lg"><div className='text-xl font-bold bg-purple-500 w-[30px] h-[30px] rounded-full text-white cursor-pointer flex justify-center items-center'>{user.displayName[0].toUpperCase()}</div> <span className="text-[16px] font-semibold text-purple-700">{user?.displayName.slice(0,6)}.</span></div>
                            }
                            </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardResponsiveNav;
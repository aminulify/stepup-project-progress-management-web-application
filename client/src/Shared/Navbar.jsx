import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import ContactSupport from '../Page/ContactSupport/ContactSupport';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from './Loading';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Navbar = () => {
    const [contact, setContact] = useState(false);
    const {user, logOut, loading, setLoading} = useContext(AuthContext);
    // const [validImg, setValidImg] = useState(false);
    // console.log(user);
    const [findUser, setFindUser] = useState(null);
        // console.log(findUser);
    const userRole = findUser;
    // console.log(userRole);
    
    
    const findUserRole = () => {
      
            // Fetch user data
            fetch('https://stepup-task-manager.aminulify.com/api/user-data')
            .then(res => res.json())
            .then(data => {
                const matchData = data.filter(dataMatch => dataMatch.email === user?.email);
                setFindUser(matchData[0]?.role); 
            })
            .catch(err => err)

    };
    
    useEffect(() => {
        findUserRole();
    }, []);

    const navigation = useNavigation();

    // useEffect(()=>{
    //     if(!user?.photoURL){
    //         return setValidImg(false);
    //     }

    //     const img = new Image();
    //     img.onload = () => setValidImg(true);
    //     img.onerror = () => setValidImg(false);
    // },[user?.photoURL])

    const handleScrollup = () =>{
        window.scrollTo(0,0)
    }

    const handleLogout = () =>{
        setLoading(true);
        logOut();
        toast.success('Logout')
        setLoading(false);
    }
    
    return (
        <section>

            {/* loading  */}
            {/* loading  */}
            { 
                navigation.state === 'loading' || loading ? <div className='fixed h-screen w-full'>
                <Loading></Loading>
                </div> : ""
            }

            <Toaster/>

            <header className='backdrop-blur-md bg-[#ffffff58] shadow-sm lg:rounded-b-[100px] md:rounded-b-[50px] fixed top-0 w-full z-10'>
                
                <nav className='max-w-[1000px] lg:mx-auto md:mx-10 mx-5 py-5 flex justify-between items-center'>
                    <Link to='/'>
                    <div className='w-[150px]'>
                        <img src="logo.png" alt="Logo Design" />
                    </div>
                    </Link>

                    {
                        user ? <div className='flex items-center gap-3 cursor-pointer'>
                            <div className='hidden md:flex items-center justify-center w-[50px] h-[50px] rounded-lg border-[1.4px] border-blue-700 p-[1px]'>{user.photoURL ? <img src={user?.photoURL} className='w-full rounded-md p-1 object-center object-cover' alt="" /> : <div className='text-2xl font-bold bg-purple-500 w-[50px] h-[45px] rounded-md flex justify-center items-center text-white'>{user?.displayName[0].toUpperCase()}</div>
                            }</div>

                            <div className='px-2 py-2 rounded-lg duration-300'>

                            <div className='flex bg-white gap-2 px-2 py-2 border-[1.4px] border-blue-700 rounded-lg duration-300'>
                            <Link to={`${userRole === 'Admin' ? '/user/dashboard' : '/user/tasks'}`}>
                            <button onClick={findUserRole()} className={`px-2 py-1 shadow-md hover:shadow-none  bg-slate-100 hover:bg-slate-200 duration-300 rounded-md text-[var(--primaryFontColor)]`}>Dashboard</button></Link>
                            <Link><button onClick={handleLogout} className=' shadow-md hover:shadow-none px-2 py-1 rounded-md bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl'>Logout</button></Link>
                        </div>
                            </div>
                        </div> : <div className='flex gap-4 items-center text-[var(--primaryFontColor)]'>
                        <div className='md:block lg:block hidden px-3 py-3 border-[1.4px] border-blue-700 rounded-lg bg-white shadow-lg shadow-slate-100 hover:shadow-none duration-300 h-[100%]'>
                            <button onClick={()=> {setContact(!contact)}}>Contact Sales</button>
                        </div>
                        <div className='flex gap-2 px-2 py-2 border-[1.4px] border-blue-700 rounded-lg bg-white shadow-md shadow-slate-100 hover:shadow-none duration-300'>
                            <Link to="/login"><button onClick={handleScrollup} className='px-2 py-1 hover:bg-slate-100 duration-300 rounded-md'>Login</button></Link>
                            <Link to="/sign-up"><button onClick={handleScrollup} className='px-2 py-1 rounded-md bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl'>Sign Up</button></Link>
                        </div>
                    </div>
                    }
                </nav>
                
                {/* index.css  */}
                <hr className='carve' />

                {/* contact support section  */}
                {
                    contact && (
                        <ContactSupport setContact={setContact} contact={contact}/>
                    )
                }
            </header>
        </section>
    );
};

export default Navbar;
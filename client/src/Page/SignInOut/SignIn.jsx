import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { TiWarningOutline } from "react-icons/ti";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading';

const SignIn = () => {
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const { signInUser, googleAuthentication, loading, setLoading } = useContext(AuthContext);

    const handleScrollup = () =>{
        window.scrollTo(0,0)
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        setError(false);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const value = {email, password};
        console.log(value);

        signInUser(email, password)
        .then((result)=>{
            const user = result.user;
            setLoading(false);
            // react hot toast 
            toast.success('Successfully Logged in!',{
                duration: 1000,
                position: 'top-center',
            });
            
            setTimeout(()=>{
                navigate('/');
            },1000);
            
        })
        .catch(err => {
            setError(true)
            toast.error('email or password is invalid!',{
                duration: 2000,
                position: 'top-center',
            });
        })
    }
 
    const handleGoogleAuth = () =>{
        setError(false);
        googleAuthentication()
        .then(result => {
            setLoading(false);
            const user = result.user;
            toast.success('Successfully Logged in!',{
                duration: 1000,
                position: 'top-center',
            });
            setTimeout(()=>{
                navigate('/');
            },1000);
            // console.log(user);
        })
        .catch(err => setError(true))
    }
    
    return (
        <div className='h-screen w-full text-[var(--primaryFontColor)] flex items-center'>
            {
                loading && <Loading/>
            }
            <div className='absolute md:top-[300px] top-[250px] md:w-[300px] w-[100px] h-[200px] lighting-effect -z-20'></div>
            <div className='absolute -z-20 md:top-[100px] top-[90px] right-0 md:w-[250px] w-[100px] h-[200px] lighting2-effect'></div>
            <section className='max-w-[500px] lg:mx-auto md:mx-10 mx-5'>
                <h2 className='md:text-5xl text-4xl text-center mt-24 font-semibold'>Login</h2>

                <div className='mt-5 border-[1.4px] border-purple-500 backdrop-blur-md p-10 rounded-lg shadow-md bg-[#ffffff71]'>
                    <form onSubmit={handleLogin}>
                        
                        <div>
                            <label>Email:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your name' name='email' />
                        </div>
                        <div className='mt-2'>
                            <label>Password:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your password' name='password' />
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <input type="checkbox" onClick={()=>setCheck(!check)} checked={check} className='accent-purple-500 cursor-pointer' />
                            <label>Remember me</label>
                        </div>
                        {
                            error && <p className='text-red-500 text-sm flex gap-2 items-center'><TiWarningOutline className='text-md'/> Email or password is incorrect</p>
                        }
                        <button className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white ${check ? "hover:bg-gradient-to-tl" : "cursor-not-allowed"} duration-300 rounded-md font-medium md:text-xl text-lg w-[50%] py-2`} disabled={!check}>Login</button>
                    </form>

                    <div className='flex items-center my-2 gap-5'>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                        <p className='font-medium'>OR</p>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                    </div>
                    

                    {/* google auth  */}
                    <div onClick={handleGoogleAuth} className='flex gap-3 items-center p-2 w-full justify-center border-[1.5px] border-purple-500 shadow-md hover:shadow-none duration-300 rounded-md cursor-pointer'>
                        <img src="../../../public/google.png" className='w-[20px]' alt="google logo" />
                        <h4 className='text-md font-medium'>Login With Google</h4>
                    </div>
                    <Link onClick={handleScrollup} to="/sign-up"><p className='pt-2 cursor-pointer underline'>Create new account?</p></Link>
                </div>
            </section>
            <div className='z-20'>
        
            
            </div>
            <Toaster/>
        </div>
    );
};

export default SignIn;
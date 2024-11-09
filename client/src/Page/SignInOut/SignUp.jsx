import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { TiWarningOutline } from "react-icons/ti";

const SignUp = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const {googleAuthentication, loading, setLoading, createUser, updateUser} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log("userData",data)
        setLoading(false);
        
        createUser(data.email, data.password)
        .then(result => {
            updateUser(data.username, data.img)
            const user = result.user;
            console.log(user)
            setLoading(true);
            // react hot toast 
            toast.success('Successfully Sign Up!',{
                duration: 1000,
                position: 'top-center',
            });
            
            setTimeout(()=>{
                setLoading(false);
                navigate('/');
            },1000);
        })
        .catch(e => {
            setLoading(false);
            toast.error('Email or username already exists!',{
                duration: 3000,
                position: 'top-center',
            });
            console.log(e);
        })
        
    };

    const handleGoogleAuth = () =>{
        googleAuthentication()
        .then(result => {
            setLoading(true);
            const user = result.user;
            toast.success('Successfully Logged in!',{
                duration: 1000,
                position: 'top-center',
            });
            setTimeout(()=>{
                setLoading(false);
                navigate('/');
            },1000);
        })
        .catch(e => {
            setLoading(false);
        })
        setLoading(false);
    }
    return (
        <div className='h-full text-[var(--primaryFontColor)] flex items-center'>
            {
                loading && <Loading/>
            }
            <div className='absolute md:top-[300px] top-[250px] md:w-[300px] w-[100px] h-[200px] lighting-effect -z-20'></div>
            <div className='absolute -z-20 md:top-[100px] top-[90px] right-0 md:w-[250px] w-[100px] h-[200px] lighting2-effect'></div>
            <section className='max-w-[500px] lg:mx-auto md:mx-10 mx-5 py-10'>
                <h2 className='md:text-5xl text-4xl text-center mt-20 font-semibold'>Sign Up</h2>

                <div className='mt-5 border-[1.4px] border-purple-500 backdrop-blur-md p-10 rounded-lg shadow-md bg-[#ffffff71]'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Username:</label>
                            <input type="text" name='username' {...register("username", {
                                pattern: {
                                    value: /^(?=.*[a-z])/,
                                    message: "Must be unique and lowercase"
                                },
                                required: "Unique username is Required"})} className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter unique username' />
                            {errors?.username?.message && <p className='text-sm text-red-500 flex gap-1 items-center'><TiWarningOutline/> {errors?.username?.message}</p>}
                        </div>
                        <div className='mt-2'>
                            <label>Email:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='example@gmail.com' name='email' {...register("email", {required: "Invalid email", pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
                            {errors?.email?.message && <p className='text-sm text-red-500 flex gap-1 items-center'><TiWarningOutline/> {errors?.email?.message}</p>}
                        </div>
                        <div className='mt-2'>
                            <label>Password:</label>
                            <input type="password" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your password' name='password' {...register("password", {
                                required: "Password must be minimum 8 character",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                  },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                    message: "Password must be uppercase, lowercase, number"
                                  }
                                })} />
                            {errors?.password?.message && <div>
                                <p className='text-sm text-red-500 flex gap-1 items-center'><TiWarningOutline/> {errors?.password?.message}</p>
                            </div>}
                        </div>
                        <div className='mt-2'>
                            <label>Photo URL: (optional)</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your photo url' name='photo' {...register("img")} />
                        </div>
                        <div className='flex gap-2 my-2'>
                            <input type="checkbox" onClick={()=>setCheck(!check)} checked={check} className='accent-purple-500 cursor-pointer' />
                            <label>I'm not a robot</label>
                        </div>
                        <button type='submit' className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white ${check ? "hover:bg-gradient-to-tl" : "cursor-not-allowed"} duration-300 rounded-md font-medium md:text-xl text-lg w-[50%] py-2`} disabled={!check}>Sign Up</button>
                    </form>
                    

                    <div className='flex items-center my-2 gap-5'>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                        <p className='font-medium'>OR</p>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                    </div>

                    {/* google auth  */}
                    <div onClick={handleGoogleAuth} className='flex gap-3 items-center p-2 w-full justify-center border-[1.5px] border-purple-500 shadow-md hover:shadow-none duration-300 rounded-md cursor-pointer'>
                        <img src="../../../public/google.png" className='w-[20px]' alt="google logo" />
                        <h4 className='text-md font-medium'>Sign Up With Google</h4>
                    </div>
                    <Link to="/login"><p className='pt-2 cursor-pointer underline'>Already have an account?</p></Link>
                </div>
            </section>
            <Toaster/>
        </div>
    );
};

export default SignUp;
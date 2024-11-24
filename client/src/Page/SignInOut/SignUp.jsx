import React, { useContext, useRef, useState } from 'react';
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
    const imgData = useRef(null);
    const [userRole, setUserRole] = useState("Graphic Designer");


    const imgBB = `https://api.imgbb.com/1/upload?key=12a5c8dd785d727ebc27245b83df27bb`;
    console.log(imgBB);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log("userData",data)
        setLoading(false);
        console.log("title",data.roleTitle);

        const image = imgData.current.files[0];

        const formData = new FormData();
        formData.append('image', image);

        fetch(imgBB, {
            method: "POST",
            body: formData
        })
        .then(res =>res.json())
        .then(imgResponse => {
            // console.log(imgResponse)
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                // console.log("img",imgURL, "data",imgResponse.data);

                createUser(data.email, data.password)
                .then(result => {
                    updateUser(data.username, imgURL)
                    const user = result.user;
                    // console.log(user)
                    setLoading(true);

                    const uId = user.uid;
                    const email = data.email;
                    const username = data.username || user.email.slice(0,5);
                    const password = data.password;
                    const imageURL = imgURL;
                    const rolePosition = data.roleTitle;
                    const role = userRole;

                    const userData = {uId, email, imageURL, username, password, rolePosition, role};
                    console.log("according", userData);

                    fetch('http://localhost:3000/api/user-data',{
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log("signup",data)
                        setLoading(false);
            
                        // react hot toast 
                        toast.success('Successfully Sign Up!',{
                            duration: 1000,
                            position: 'top-center',
                        });

                        navigate('/');

                    })
                    .catch(err => {
                        console.log(err);
                    })
                    
                })
                    }
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
                            <label className=''>Role:</label>
                            
                            <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' onChange={(e) => setUserRole(e.target.value)}>
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
                        <div className='mt-2'>
                            <label>Role Title:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Ex: (Graphic Designer / Frontend Developer / Web Developer)' name='roleTitle' {...register("roleTitle", {required: "Role must be needed"})} />
                            {errors?.roleTitle?.message && <p className='text-sm text-red-500 flex gap-1 items-center'><TiWarningOutline/>Role must be needed</p>}
                        </div>
                        <div className='mt-2 w-full relative'>
                            <label>Upload Image</label>
                            <input type="file" accept="image/jpg, image/png, image/jpeg" className='absolute w-full h-full bottom-0 opacity-0 cursor-pointer' name='image' ref={imgData} />
                            <img src="image-upload.png" alt="upload image icon" className='mt-1' />
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
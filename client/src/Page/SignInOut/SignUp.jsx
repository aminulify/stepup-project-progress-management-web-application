import React, { useState } from 'react';

const SignUp = () => {
    const [check, setCheck] = useState(false);
    return (
        <div className='h-full text-[var(--primaryFontColor)] flex items-center'>
            <div className='absolute md:top-[300px] top-[250px] md:w-[300px] w-[100px] h-[200px] lighting-effect -z-20'></div>
            <div className='absolute -z-20 md:top-[100px] top-[90px] right-0 md:w-[250px] w-[100px] h-[200px] lighting2-effect'></div>
            <section className='max-w-[500px] lg:mx-auto md:mx-10 mx-5 py-10'>
                <h2 className='md:text-5xl text-4xl text-center mt-24 font-semibold'>Sign Up</h2>

                <div className='mt-5 border-[1.4px] border-purple-500 backdrop-blur-md p-10 rounded-lg shadow-md bg-[#ffffff71]'>
                    <form>
                        <div>
                            <label>Name:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your name' name='email' />
                        </div>
                        <div className='mt-2'>
                            <label>Email:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='example@gmail.com' name='email' />
                        </div>
                        <div className='mt-2'>
                            <label>Password:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your name' name='password' />
                        </div>
                        <div className='mt-2'>
                            <label>Photo URL:</label>
                            <input type="text" className='p-2 rounded-md w-full outline-none border-[1.4px] border-purple-500 backdrop-blur-lg' placeholder='Enter your photo url' name='password' />
                        </div>
                        <div className='flex gap-2 my-2'>
                            <input type="checkbox" onClick={()=>setCheck(!check)} checked={check} className='accent-purple-500 cursor-pointer' />
                            <label>I'm not a robot</label>
                        </div>
                        <button className={`bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white ${check ? "hover:bg-gradient-to-tl" : "cursor-not-allowed"} duration-300 rounded-md font-medium md:text-xl text-lg px-10 py-2`} disabled={!check}>Sign Up</button>
                    </form>

                    <div className='flex items-center my-2 gap-5'>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                        <p className='font-medium'>OR</p>
                        <div className='h-[1.4px] w-[100%] bg-purple-500'></div>
                    </div>

                    {/* google auth  */}
                    <div className='flex gap-3 items-center p-2 w-full justify-center border-[1.5px] border-purple-500 shadow-md hover:shadow-none duration-300 rounded-md cursor-pointer'>
                        <img src="../../../public/google.png" className='w-[20px]' alt="google logo" />
                        <h4 className='text-md font-medium'>Sign Up With Google</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
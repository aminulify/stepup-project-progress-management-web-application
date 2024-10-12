import React from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";

const Features = () => {
    return (
        <div className='relative'>
            <div className='absolute md:w-[200px] top-10 w-[100px] h-[100px] lighting-effect -z-2'></div>
            <div className='absolute md:w-[200px] right-0 bottom-0 w-[100px] h-[100px] lighting2-effect -z-2'></div>

        <section className='max-w-[1000px] lg:mx-auto md:mx-10 mx-5 grid md:grid-cols-2 grid-cols-1 bg-white border-[1.5px] my-10 p-10 rounded-xl shadow-lg'>

            {/* left side  */}
                <section>
                    <div className='text-[var(--primaryFontColor)]'>
                    <h2 className='font-semibold text-2xl'>Deliver projects on time, every time</h2>
                    <p className='text-lg'>Get teams running more efficiently with a complete project management solution.</p>

                    
                        <aside className='my-3'>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='text-lg font-medium'>Reduce delivery time with custom templates</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='text-lg font-medium'>Track effort to impact with OKR planning</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='text-lg font-medium'>Manage complex projects at scale</p>
                            </div>
                            <div className='flex gap-2 items-center mt-4'>
                                <img src="../../../public/developer-img.png" className='w-[100px]' alt="developer image" />
                                <div>
                                    <p><span className='font-semibold'>“StepUp brings all of our teams together into one place</span> so that they can stay on track, collaborate and communicate.”</p>
                                    <p className='text-sm font-semibold text-purple-500'>Developer: “ Aminul Islam ”</p>
                                </div>
                            </div>
                        </aside>
                </div>
                </section>

                {/* right side  */}
                <section>
                    
                </section>
        </section>
        </div>
    );
};

export default Features;
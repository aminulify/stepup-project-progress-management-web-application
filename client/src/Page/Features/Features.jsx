import React, { useContext } from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { GiSpeedometer } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Features = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='relative'>
            <div className='absolute md:w-[200px] top-10 w-[100px] h-[100px] lighting-effect -z-2'></div>
            <div className='absolute md:w-[200px] right-0 bottom-0 w-[100px] h-[100px] lighting2-effect -z-2'></div>

        <section className='max-w-[1000px] lg:mx-auto md:mx-10 mx-5 grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-20 bg-white border-[1.5px] my-10 p-10 rounded-xl shadow-lg items-center'>

            {/* left side  */}
                <section>
                    <div className='text-[var(--primaryFontColor)]'>
                    <h2 className='font-semibold md:text-2xl text-xl'>Deliver projects on time, every time</h2>
                    <p className='md:text-lg text-md'>Get teams running more efficiently with a complete project management solution.</p>

                    
                        <aside className='my-3'>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='md:text-lg text-md font-medium'>Reduce delivery time with custom templates</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='md:text-lg text-md font-medium'>Track effort to impact with OKR planning</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoMdCheckboxOutline className='text-xl text-purple-500'/>
                                <p className='md:text-lg text-md font-medium'>Manage complex projects at scale</p>
                            </div>
                            <div className='flex gap-2 items-center mt-4'>
                                <img src="developer-img.png" className='w-[100px]' alt="developer image" />
                                <div>
                                    <p className='md:text-md text-sm'><span className='font-semibold'>“StepUp brings all of our teams together into one place</span> so that they can stay on track, collaborate and communicate.”</p>
                                    <p className='text-sm font-semibold text-purple-500'>Developer: “ Aminul Islam ”</p>
                                </div>
                            </div>
                        </aside>
                </div>
                </section>

                {/* right side  */}
                <section className='text-[var(--primaryFontColor)] \'>
                    <div className="py-4 text-lg md:text-xl font-medium flex gap-2 items-center">
                        <IoSettingsOutline className='text-purple-500 md:text-2xl text-xl'/>
                        <h2>Flexible workflows for every team</h2>
                    </div>
                    <hr />
                    <div className="py-4 text-lg md:text-xl font-medium flex gap-2 items-center">
                        <GrDocumentText className='text-purple-500 md:text-2xl text-xl'/>
                        <h2>Tasks, docs, spreadsheets, and more</h2>
                    </div>
                    <hr />
                    <div className="py-4 text-lg md:text-xl font-medium flex gap-2 items-center">
                        <GrWorkshop className='text-purple-500 md:text-2xl text-xl'/>
                        <h2>Resource and workload optimization</h2>
                    </div>
                    <hr />
                    <div className="py-4 text-lg md:text-xl font-medium flex gap-2 items-center">
                        <GiSpeedometer className='text-purple-500 md:text-2xl text-xl'/>
                        <h2>Dashboards and insights</h2>
                    </div>
                    {
                        user ? <Link to="/user/dashboard"><button className='flex justify-center items-center gap-1 mx-auto py-3 w-full bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl duration-300 rounded-md font-semibold md:text-xl text-md'>Get Started <FaArrowRight className="text-md md:text-lg"/></button></Link> : <Link to="/login"><button className='flex justify-center items-center gap-1 mx-auto py-3 w-full bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl duration-300 rounded-md font-semibold md:text-xl text-md'>Get Started <FaArrowRight className="text-md md:text-lg"/></button></Link>
                    }
                </section>
        </section>
        </div>
    );
};

export default Features;
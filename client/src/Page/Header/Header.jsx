import React, { useContext } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import ClientSection from '../ClientSection/ClientSection';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <section>
            <div className='max-w-[600px] lg:mx-auto mx-5 md:mx-auto pt-20 pb-16 text-[var(--primaryFontColor)] mt-20'>
                <h2 className='font-bold md:text-6xl text-4xl text-center'>The everything app, for work</h2>
                <div className='text-center py-3'>
                    <h4 className='md:text-2xl text-lg font-semibold'>Get everyone working in a single platform</h4>
                    <h4 className='md:text-2xl text-lg '>designed to manage any type of work.</h4>
                </div>
                {
                    user ? <Link to="/user/dashboard"><button className='flex justify-center items-center gap-1 mx-auto py-3 w-[75%] bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl duration-300 rounded-md font-semibold md:text-2xl text-xl'>Get Started. It's FREE <FaArrowRight className="text-xl"/></button></Link> :  <Link to="/login"><button className='flex justify-center items-center gap-1 mx-auto py-3 w-[75%] bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl duration-300 rounded-md font-semibold md:text-2xl text-xl'>Get Started. It's FREE <FaArrowRight className="text-xl"/></button></Link>
                }
                <p className="text-center py-1 font-medium text-slate-500">Free Forever. No Credit Card.</p>
            </div>

            {/* client section  */}
            {/* client section  */}
            {/* client section  */}
            <ClientSection/>

            {/* preject Preview  */}
            {/* preject Preview  */}
            {/* preject Preview  */}
            <ProjectPreview/>

            {/* reviews  */}
            {/* reviews  */}
            {/* reviews  */}
            <Reviews/>

            {/* Features  */}
            {/* Features  */}
            {/* Features  */}
            <Features/>
        </section>
    );
};

export default Header;
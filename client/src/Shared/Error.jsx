import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Error = () => {
    return (
        <div className='h-screen w-full gird place-content-center'>
            <div className='md:w-[50%] w-[75%] mx-auto grid place-items-center'>
                <img src="404-img.png" alt="Error Page Image" />
                <Link to="/">
                <button className='flex justify-center items-center gap-1 mx-auto py-3 px-12 mt-12 bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl duration-300 rounded-md font-semibold md:text-2xl text-xl'><IoMdArrowRoundBack className="text-2xl"/> BACK TO HOME</button></Link>
            </div>
        </div>
    );
};

export default Error;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('reviews.json')
        .then(res => setReviews(res.data))
        .catch(err => err)
    },[])
    return (
        <div className='text-[var(--primaryFontColor)] bg-white'>
            <div className='text-center mb-5 max-w-[1000px] lg:mx-auto md:mx-10 mx-5'>
                <h2 className='font-bold md:text-5xl text-4xl'>Perfect fit for every team</h2>
                <h4 className='font-semibold md:text-xl text-lg mt-2'>Get started fast with out-of-the-box solutions.</h4>
                <h4 className='md:text-xl text-lg'>Easily customize StepUp as team needs grow!</h4>
            </div>

            <aside className='overflow-hidden'>
            <div className='my-8 flex w-[4800px] img-slide'>
            {
                reviews.length >= 0 && (
                    reviews.map((client, index) => (
                        <div key={index}>
                            <div className='relative ml-5 img-slide-rolling'>
                                <div className=''>
                                    <img src={client.img} className=' rounded-2xl' alt={client.reviews} />
                                    
                                </div>
                                <div className='absolute bg-[#00000052] rounded-b-xl bottom-0 w-full h-[175px] backdrop-blur-md'>
                                    <div className='text-white p-2'>
                                        <h2 className='text-xl font-bold'>{client.company_name}</h2>
                                        
                                        <h2 className='text-[var(--whiteFontColor)] leading-tight flex gap-1'><BiSolidQuoteAltLeft className='text-2xl'/>{client.review}</h2>
                                        <h4 className='mt-2 text-sm'>{client.name}</h4>
                                        <h4 className='text-[12px]'>{client.position_subtitle}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            </div>
            </aside>

        </div>
    );
};

export default Reviews;
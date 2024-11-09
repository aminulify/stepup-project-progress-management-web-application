import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactSupport from '../Page/ContactSupport/ContactSupport';

const Footer = () => {
    const [contact, setContact] = useState(false);
    const handleTopOfScreen = () =>{
        window.scrollTo(0,0);
    }
    return (
        <section>
            <div className='w-full bg-[#f8f8fc] py-5 rounded-t-[100px]'>
            <div className='max-w-[1000px] lg:mx-auto md:mx-10 mx-5 text-[var(--primaryFontColor)] flex md:flex-row flex-col items-center md:justify-between gap-2'>
                <Link to="/" className='flex gap-1 items-center cursor-pointer'>
                    <img src="../../public/favicon.png" className='w-5' alt="Logo Icon" />
                    <h3 className='font-semibold text-md'>The everything app for work.</h3>
                </Link>
                <div className='flex gap-3 text-sm'>
                    <p>&copy; 2024 StepUp</p>
                    <Link to="/terms/privacy_policy"  onClick={handleTopOfScreen} className='underline'>Privacy Policy</Link>
                    <button onClick={()=>setContact(!contact)} className='underline'>Contact Sales</button>
                </div>
                </div>
            </div>

            {/* contact support section  */}
            {
                contact && (
                    <ContactSupport setContact={setContact} contact={contact}/>
                )
             }
        </section>
    );
};

export default Footer;
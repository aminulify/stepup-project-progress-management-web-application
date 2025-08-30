import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ContactSupport = ({setContact, contact}) => {
    
    const [employeeNum, setEmployeeNum] = useState("1-10");

    const handleContactSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const description = form.description.value;
        const companyName = form.company_name.value;
        const numberOfEmployee = employeeNum;

        const supportData = {name, email, phone, companyName, description, numberOfEmployee};
     
        fetch('https://stepup-task-manager-api.aminulify.com/contact',{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(supportData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            form.reset();
            setContact(false);

            // hot toast 
            toast.success('Successfully send!',{
                duration: 3000,
                position: 'top-center',
            });

        })
        .catch(err => console.log(err))

    }
    return (
        <section onSubmit={handleContactSubmit} className='contact-section top-0 w-screen h-screen z-[40] fixed bg-[#0000001c]'>
            
                        <div className='md:w-[500px] w-[90%] md:h-[520px] h-[650px] absolute left-[50%] translate-x-[-50%] text-[var(--primaryFontColor)] p-10 rounded-lg mt-5] bg-white overflow-y-scroll mt-10'>
                            <h2 className='text-center font-bold text-2xl'>Contact For Support</h2>
                            <form className='my-3 flex flex-col gap-3'>
                                <div>
                                    <label>Name:</label>
                                    <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Enter your name' name="name" required/>
                                </div>

                                <div>
                                    <label className=''>Email:</label>
                                    <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='example@gmail.com' name="email" required/>
                                </div>

                                <div>
                                    <label className=''>Phone:</label>
                                    <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='+880 - XXX - XXX' name="phone" required/>
                                </div>

                                <div>
                                    <label className=''>Company Name:</label>
                                    <input type="text" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Enter your company name' name="company_name" required/>
                                </div>

                                <div>
                                    <label className=''>Number of Employees:</label>
                                    {/* <Select>
                                        <Options></Options>
                                    </Select> */}
                                    <select id="rangeSelect" className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' onChange={(e)=>{setEmployeeNum(e.target.value)}}>
                                        <option value="1-10">1-10</option>
                                        <option value="11-20">11-20</option>
                                        <option value="21-31">21-30</option>
                                        <option value="21-31">21-50</option>
                                        <option value="21-31">51-100</option>
                                        <option value="21-31">101-200</option>
                                        <option value="21-31">201-999</option>
                                    </select>
                                </div>

                                <div>
                                    <label className=''>Describe Issues:</label>
                                    <textarea  className='w-full p-2 outline-none border-[1.2px] border-purple-500 rounded-md' placeholder='Describe issues here' rows={2} name="description" required/>
                                </div>

                                <div><p className='text-sm'>By submitting my information, I confirm that I have read and understood the StepUp <Link className='text-blue-600 underline' to="/terms/privacy_policy" onClick={()=> setContact(!contact)}>Privacy Policy</Link>.</p></div>

                                <div className='flex gap-2 px-2 py-2'>
                                    <button type='submit' className='px-6 py-2 rounded-md bg-gradient-to-tr from-[var(--gradientFirstColor)] via-[var(--gradientSecondColor)] to-[var(--gradientThirdColor)] text-white hover:bg-gradient-to-tl'>Submit</button>
                                
                                    <button className='px-6 py-2 hover:bg-slate-100 duration-300 rounded-md border-[1.2px] border-purple-500' onClick={()=> setContact(!contact)}>Cancel</button>
                                    
                                </div>
                            </form>
                        </div>
                       
                    </section>
    );
};

export default ContactSupport;
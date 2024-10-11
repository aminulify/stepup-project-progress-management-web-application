import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Home = () => {
    return (
        <div className='relative'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;
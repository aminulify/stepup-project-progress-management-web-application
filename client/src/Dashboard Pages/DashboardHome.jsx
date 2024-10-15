import React from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className='relative'>
            <DashboardNavbar />
            <Outlet/>
        </div>
    );
};

export default DashboardHome;
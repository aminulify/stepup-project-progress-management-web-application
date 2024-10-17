import React from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className='relative md:flex md:justify-between'>
            <DashboardNavbar />
            <Outlet />
        </div>
    );
};

export default DashboardHome;
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className=''>
            <Outlet />
        </div>
    );
};

export default DashboardHome;
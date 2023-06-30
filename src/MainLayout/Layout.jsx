import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
    <Navbar/>
    <Outlet/>
    
        </>
    );
};

export default Layout;
import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Layout = () => {
const {isDarkMode}=useContext(AuthContext)
    return (
        <>

        <div className={`${isDarkMode? "   bgday duration-500 ":'bgmain duration-500'}`}>
        <ul class="circles">
          
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
  </ul>


        <Navbar/>
    <Outlet/>
        </div>

    
        </>
    );
};

export default Layout;
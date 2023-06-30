import React from 'react';
import logo from '../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/Gi'
const Navbar = () => {
    return (
        <div className='mx-20 h-32 flex  justify-between '>
         <div>  <img className='w-20' src={logo} alt="" /></div>
           <div><GiHamburgerMenu size={50} style={{color:'black'}}/></div>
        </div>
    );
};

export default Navbar;
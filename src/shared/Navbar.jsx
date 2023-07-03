import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import DayNightToggle from 'react-day-and-night-toggle'
import {GiHamburgerMenu} from 'react-icons/Gi'
import { AuthContext } from '../provider/AuthProvider';
import logo2 from '../assets/White Black M Letter Logo Design Business Identity for Digital Design Company (2).png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const {    isDarkMode,setIsDarkMode}=useContext(AuthContext)
    return (
        <div className='mx-20 sticky top-0 h-32 flex z-30  justify-between '>
         <div className='my-auto'>{
            isDarkMode?          <img className='w-20' src={logo2} alt="" />  : <img className='w-20' src={logo} alt="" />
            }
        
        
         </div>
       
           <div className='flex  z-30'>   
<div className='my-auto me-5'>
<DayNightToggle 
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />  <Link to='/blog'> <p className='bg-yellow-500 rounded-full text-3xl text-white text-center'>blog</p></Link></div>

   
    
    
    <div className='my-auto'> <GiHamburgerMenu size={50} style={{color:'black'}}/></div></div>
           
        </div>
    );
};

export default Navbar;
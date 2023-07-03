import  { useContext } from 'react';
// import react from '../../assets/react.png'
import git from '../../assets/git.png'
import photo from '../../assets/myself.jpg'
import React from 'react';
// Import Swiper React components
import project25 from '../../assets/project23.png'
import project26 from '../../assets/project24.png'
import project12 from '../../assets/project1(2).png'
import project13 from '../../assets/project1(1).png'
import project14 from '../../assets/project1(3).png'
import project15 from '../../assets/project1(4).png'
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules

import react from '../../assets/react.png'
import fire from '../../assets/techFirebase.png'

import api from '../../assets/techapi.png'
// import correct from '../../assets/correct.png'
import nodejs from '../../assets/techNodejs.png'
import mongo from '../../assets/techmongo.png'
import jwt from '../../assets/jwt.png'
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../provider/AuthProvider';
// import Project2 from './Project2';
const AllprojectDiv = () => {
    const {isDarkMode}=useContext(AuthContext)
    return (
  <>
  <div>
    {/* __________________ */}
    <div className='grid  mt-[250px] '>
            
            <div className='text-center  justify-center flex'><p className='text-7xl font-semibold text-red-600'>MERN</p><p className='bg-gray-700 mx-4 w-1 my-auto h-full'></p> <p className={`${isDarkMode?"text-white": 'text-black'} text-6xl my-auto`}>PROJECTS</p></div>
      <div className='grid lg:grid-cols-3 mt-20'>
      
      <div className={`h-[600px] col-span-1   my-auto rounded-xl mx-5 ${isDarkMode?' bg-gray-900 text-black' : 'bg-gray-800 shadow-xl'} shadow-xl`}>
      <div className='bg-white rounded-lg mx-5 shadow-xl'><p className='font-bold  text-3xl text-center  text-black ms-10 mt-2'>CART YOUR NEEDS</p></div>
      <hr  className='mt-4'/>
      <div className='ms-5'> 
          <div className='grid '> <div className=''>
              <p className={`text-[30px] ${isDarkMode?'text-white':"text-white"} ms-5 mt-5`}>Features :</p>
             <Slide> <p className='text-[30px] bg-white w-2/3 h-1 ms-2 mt-2'> </p></Slide>
              </div>
          
          <div className='col-span-2 text-[20px] mt-5 '>
              
              <div className=' flex  mt-2 mb-5'>
              <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>ADMIN </p> </Slide> PANEL|</ p>
              <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>USER </p> </Slide> DASHBOARD|</ p>
              <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>SELLER </p> </Slide> DASHBOARD</ p>
              </div>
             <p className='text-gray-400'>* Users Can SIGNUP through <b className='bg-gradient-to-r from-red-400 rounded-xl px-2 text-white'>Firebase authentication</b></p>
             <p className='text-gray-400'>* User data stored to database to preview in admin panel </p>
             <p className='text-gray-400'>* <b className='bg-gradient-to-r from-red-400 rounded-xl px-2 text-white' >Add New Products</b> in seller dashboard </p>
             <p className='text-gray-400'>* Add to Cart and remove from Cart  </p>
             <p className='text-gray-400 flex '>*<p className='bg-gradient-to-r from-red-400 rounded-xl px-2 ms-2 text-white'> TanStack QUery</p> to fetch data more efficiently </p>
             <p className='text-gray-400 flex '>* Send Request to ADMIN to <p className='bg-gradient-to-r from-red-400 rounded-xl px-2 ms-2 text-white'> Become a seller</p> </p>
             
        
          
             </div>
          <div className='grid'>
          <div className=''>
              <p className='text-[20px]  text-white ms-5 mt-5'>Technology :</p>
             <Slide> <p className='text-[30px] bg-white w-2/3 h-1 ms-2 mt-5'> </p></Slide>
              </div>
              
      
              <div className='flex mt-5 gap-5 '>
                  
               <Slide direction='up' delay='20'>   <div className='grid justify-items-center'>
                      <div><img className='w-10' src={react} alt="" /></div>
                      <p>React</p>
                  </div></Slide>
                <Slide direction='up' delay='18'>  <div className='grid  justify-items-center'>
                     <div>
                     <img className='w-10' src={fire} alt="" />
                     </div>
                  <p>Firebase</p>
                  </div></Slide>
                  
               <Slide direction='up' delay='16'>   <div className='grid justify-items-center'>
                     <div>
                     <img className='w-10' src={nodejs} alt="" />
                     </div>
                      <p>Node </p>
                  </div></Slide>
              <Slide direction='up' delay='14'>    <div className='grid justify-items-center'>
                   <div>
                   <img className='w-10' src={jwt} alt="" />
                   </div>
                      <p> Webtoken</p>
                  </div></Slide>
             <Slide direction='up' delay='12'>     <div className='grid  justify-items-center'>
                      <div><img className='w-10' src={mongo} alt="" />
                      <p>MongoDB</p></div>
                  </div></Slide>
             <Slide direction='up' delay='10'>     <div className='grid justify-items-center'>
                    <div>  <img className='w-[80px]' src={api} alt="" /></div>
                      <p>Api</p>
                  </div></Slide>
              
                  
                  </div>
              
          </div>
            
              </div>
      
        
          
      
      </div>
      
      </div>
      <div className='shadow-xl rounded-xl mx-10 col-span-2'>
      
          <div className='bg-white overflow-y-scroll  h-[600px]'>
      <img className='mb-14 rounded-md p-5' src={project12} alt="" />
      <img className='mb-14 rounded-md p-5' src={project13} alt="" />
      <img className='mb-14 rounded-md p-5' src={project14} alt="" />
      <img className='mb-14 rounded-md p-5' src={project15} alt="" />
          </div>
      
      
      </div>
      
      </div>
      
            <div>
      
            </div>
      
              </div>


    {/* ___________ */}


    <div className='grid  mt-[250px] '>
            
            <div className='text-center  justify-center flex'> <p className={`${isDarkMode?"text-white": 'text-black'} text-6xl my-auto`}>PROJECT | 2</p></div>
      <div className='grid lg:grid-cols-3 mt-10'>
      
      <div className={`h-[650px] col-span-1   my-auto rounded-xl mx-5 ${isDarkMode?' bg-gray-900 text-black' : 'bg-gray-800 shadow-xl'} shadow-xl`}>
      <div className='bg-white rounded-lg mx-5 shadow-xl'><p className='font-bold  text-3xl text-center  text-black ms-10 mt-2'>GALA WEEDINGS</p></div>
      <hr  className='mt-4'/>
      <div className='ms-5'> 
          <div className='grid '> <div className=''>
              <p className={`text-[30px] ${isDarkMode?'text-white':"text-white"} ms-5 mt-5`}>Features :</p>
             <Slide> <p className='text-[30px] bg-white w-2/3 h-1 ms-2 mt-2'> </p></Slide>
              </div>
          
          <div className='col-span-2 text-[20px] mt-5 '>
              
              <div className=' flex gap-2 mt-2 mb-5'>
              <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>ADMIN </p> </Slide> PANEL|</ p>
              <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>USER </p> </Slide> DASHBOARD| </ p>
              {/* <p className='font-semibold text-white flex  '><Slide><p className='text-red-600  pe-1'>SELLER </p> </Slide> DASHBOARD</ p> */}
              </div>
             <p className='text-gray-400'>* Users Can SIGNUP through <b className='bg-gradient-to-r from-red-400 rounded-xl px-2 text-white'>Firebase authentication</b></p>
             <p className='text-gray-400'>* User data stored to database to preview in admin panel </p>
             <p className='text-gray-400'>* <b className='bg-gradient-to-r from-red-400 rounded-xl px-2 text-white' >Add New placec</b> in seller dashboard </p>
             <p className='text-gray-400'>* Add to Cart and remove from Cart  </p>
             <p className='text-gray-400 flex '>*<p className='bg-gradient-to-r from-red-400 rounded-xl px-2 ms-2 text-white'> TanStack QUery</p> to fetch data more efficiently </p>
             {/* <p className='text-gray-400 flex '>* Send Request to ADMIN to <p className='bg-gradient-to-r from-red-400 rounded-xl px-2 ms-2 text-white'> Become a seller</p> </p> */}
             
        
          
             </div>
          <div className='grid'>
          <div className=''>
              <p className='text-[20px]  text-white ms-5 mt-5'>Technology :</p>
             <Slide> <p className='text-[30px] bg-white w-2/3 h-1 ms-2 mt-5'> </p></Slide>
              </div>
              
      
              <div className='flex mt-5 gap-5 '>
                  
               <Slide direction='up' delay='20'>   <div className='grid justify-items-center'>
                      <div><img className='w-10' src={react} alt="" /></div>
                      <p>React</p>
                  </div></Slide>
                <Slide direction='up' delay='18'>  <div className='grid  justify-items-center'>
                     <div>
                     <img className='w-10' src={fire} alt="" />
                     </div>
                  <p>Firebase</p>
                  </div></Slide>
                  
               <Slide direction='up' delay='16'>   <div className='grid justify-items-center'>
                     <div>
                     <img className='w-10' src={nodejs} alt="" />
                     </div>
                      <p>Node </p>
                  </div></Slide>
              <Slide direction='up' delay='14'>    <div className='grid justify-items-center'>
                   <div>
                   <img className='w-10' src={jwt} alt="" />
                   </div>
                      <p> Webtoken</p>
                  </div></Slide>
             <Slide direction='up' delay='12'>     <div className='grid  justify-items-center'>
                      <div><img className='w-10' src={mongo} alt="" />
                      <p>MongoDB</p></div>
                  </div></Slide>
             <Slide direction='up' delay='10'>     <div className='grid justify-items-center'>
                    <div>  <img className='w-[80px]' src={api} alt="" /></div>
                      <p>Api</p>
                  </div></Slide>
              
                  
                  </div>
              
          </div>
            
              </div>
      
        
          
      
      </div>
      
      </div>
      <div className='shadow-xl rounded-xl mx-10 col-span-2'>
      
          <div className='bg-white overflow-y-scroll  h-[600px]'>
      <img className='mb-14 rounded-md p-5' src={project25} alt="" />
      <img className='mb-14 rounded-md p-5' src={project26} alt="" />
    
          </div>
      
      
      </div>
      
      </div>
      
            <div>
      
            </div>
      
              </div>


  </div>
  
  
  
  
  
  
  
  
  
  
  </>
    );
};

export default AllprojectDiv;
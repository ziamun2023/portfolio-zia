import React from 'react';
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';
// import skill from '../../assets/skills.jpg'
import react from '../../assets/react2.png'
import js from '../../assets/javaScript.png'
import fire from '../../assets/firebase.png'
import mongo from '../../assets/mongo.png'
import github from '../../assets/github2.png'
import router from '../../assets/router.png'
import html from '../../assets/html5.png'
import jwt from '../../assets/jwt.png'
import chrome from '../../assets/chrome.png'
import vercel from '../../assets/vercel.png'
import css from '../../assets/css.png'
import tools from '../../assets/tools.png'
import tailwind from '../../assets/tailwind.png'
import boot from '../../assets/bootstrap.png'
import node from '../../assets/nodejs.png'
import skill2 from '../../assets/skill2.png'
import { Fade, Slide } from 'react-awesome-reveal';
import AOS from 'aos';
import skillICon from '../../assets/skilldevelope.png'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Skill2 = () => {
    
    return (
      <div className=' grid lg:grid-cols-3 mt-28  h-[1600px]'>

   <div className='me-10 col-span-1'>
 <Slide direction='up'>  <Parallax data-aos="fade-up" speed={0}> <p className='text-7xl   shadow-xl rounded-r-3xl text-black text-center flex '><img className='w-[170px] p-2' src={fire} alt="" />
   <p className='text-2xl my-auto'>Firebase</p></p></Parallax></Slide>
   
<Slide direction='up'><Parallax speed={5} data-aos="fade-up" > <p className='text-7xl justify-end  shadow-xl rounded-r-3xl text-black text-center flex'> <p className='text-2xl my-auto flex '>Chrome Dev tools <p className=''></p></p><img className='w-[170px] p-2' src={chrome} alt="" />
  </p></Parallax></Slide>
<Slide direction='up'>  <Parallax data-aos="fade-up" speed={10}> <p className='text-7xl   shadow-xl rounded-r-3xl text-black text-center flex '><img className='w-[170px] p-2' src={node} alt="" />
   <p className='text-2xl my-auto'>Node</p></p></Parallax></Slide>
<Slide direction='up'>   <Parallax speed={15} data-aos="fade-up" > <p className='text-7xl h-[140px] justify-end  shadow-xl rounded-r-3xl text-black text-center flex'> <p className='text-2xl my-auto pb-12 flex'>vercel <p className='text-red-600'></p></p><div>
<img className='w-[290px] me-5  p-2' src={vercel} alt="" />
</div>
  </p></Parallax></Slide>
<Slide direction='up'>  <Parallax data-aos="fade-up" speed={20}> <p className='text-7xl   shadow-xl rounded-r-3xl text-black text-center flex '>
  <img className='w-[170px] p-2' src={jwt} alt="" /><p className='text-2xl my-auto'>Jwt</p>
 </p></Parallax></Slide>
 <Slide direction='up'>   <Parallax speed={25} data-aos="fade-up" > <p className='text-7xl justify-end  shadow-xl rounded-r-3xl text-black text-center flex'> <p className='text-2xl my-auto flex'>Git <p className='text-red-600'>Hub</p></p><img className='w-[170px] text-black p-2' src={github} alt="" />
  </p></Parallax></Slide>


    

   </div>
   <div className='col-span-2'>
    <Parallax speed={-20}>
<div className=' text-center relative flex   text-white  bg-black w-full mt-[350px] h-[300px] rounded-l-lg '>

<p className=' h-14 my-auto mx-10 bg-white w-2'></p> <p className='text-5xl me-14 pt-[120px]'>Tools</p>
<div  className=''>
<img className='w-[290px] absolute top-9 right-0' src={tools} alt="" />
</div>


</div>

     
    </Parallax>
    </div>
      </div>
 
    );
};

export default Skill2;
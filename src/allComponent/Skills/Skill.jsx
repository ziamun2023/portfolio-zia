import React from 'react';
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';
// import skill from '../../assets/skills.jpg'
import react from '../../assets/react2.png'
import js from '../../assets/javaScript.png'
import fire from '../../assets/firebase.png'
import mongo from '../../assets/mongo.png'
import router from '../../assets/router.png'
import html from '../../assets/html5.png'
import jwt from '../../assets/jwt.png'
import css from '../../assets/css.png'
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
const Skill = () => {
    
    return (
      <div className=' grid lg:grid-cols-3  h-[1500px]'>
    <div className='col-span-2'>
    <Parallax speed={-30}>
<div className='  relative flex  justify-around  text-white bg-black w-full mt-[500px] h-[300px] rounded-r-lg '> 
<div  className=''>
<img className='w-[290px] absolute top-9 left-0' src={skillICon} alt="" />
</div>
<p className='text-5xl ms-[600px] pt-[120px]'>My skills</p><p className=' h-14 my-auto  bg-white w-2'></p>


</div>

     
    </Parallax>
    </div>
   <div className='ms-10 col-span-1'>
 <Slide direction='up'>  <Parallax data-aos="fade-left" speed={0}> <p className='text-7xl  runded shadow-xl rounded-l-3xl text-black text-center flex '><img className='w-[170px] p-2' src={react} alt="" />
   <p className='text-2xl my-auto'>React</p></p></Parallax></Slide>
   
<Slide direction='up'><Parallax speed={5} data-aos="fade-left" > <p className='text-7xl justify-end runded shadow-xl rounded-l-3xl text-black text-center flex'> <p className='text-2xl my-auto flex'>Java <p className='text-red-600'>Script</p></p><img className='w-[170px] p-2' src={js} alt="" />
  </p></Parallax></Slide>
<Slide direction='up'>  <Parallax data-aos="fade-left" speed={10}> <p className='text-7xl  runded shadow-xl rounded-l-3xl text-black text-center flex '><img className='w-[170px] p-2' src={mongo} alt="" />
   <p className='text-2xl my-auto'>MongoDB</p></p></Parallax></Slide>
<Slide direction='up'>   <Parallax speed={15} data-aos="fade-left" > <p className='text-7xl justify-end runded shadow-xl rounded-l-3xl text-black text-center flex'> <p className='text-2xl my-auto flex'>React <p className='text-red-600'>Router</p></p><img className='w-[170px] p-2' src={router} alt="" />
  </p></Parallax></Slide>
<Slide direction='up'>  <Parallax data-aos="fade-left" speed={20}> <p className='text-7xl  runded shadow-xl rounded-l-3xl text-black text-center flex '>
  <img className='w-[170px] p-2' src={jwt} alt="" /><p className='text-2xl my-auto'>Jwt</p>
 </p></Parallax></Slide>
 <Slide direction='up'>   <Parallax speed={25} data-aos="fade-left" > <p className='text-7xl justify-end runded shadow-xl rounded-l-3xl text-black text-center flex'> <p className='text-2xl my-auto flex'>Tailwind <p className='text-red-600'>Css</p></p><img className='w-[170px] p-2' src={tailwind} alt="" />
  </p></Parallax></Slide>


    

   </div>
      </div>
 
    );
};

export default Skill;
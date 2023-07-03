import React, { useContext } from 'react';
import IntroductionSection from '../../allComponent/section-1/IntroductionSection';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import Skill from '../../allComponent/Skills/Skill';

import { Slide } from 'react-awesome-reveal';
import AllprojectDiv from '../../allComponent/Allprojects/AllprojectDiv';
import { motion } from "framer-motion"
import Courses from '../../allComponent/Courses/Courses';
import ContactMe from '../../allComponent/ContactMe/ContactMe';


const Home = () => {
 
    const parallax = useParallax<HTMLDivElement>({
        rotateY: [0, 360],
      });
    return (
        <div>
            <IntroductionSection/>
         
         <Skill/>
         {/* <Slide direction='right'>  <div  className='h-[40px] rounded-r-full  bg-gray-300 w-2/4'></div></Slide>
       <Slide >  <div  className='h-[40px]   bg-black w-full'></div></Slide>
       <Slide direction='right'>  <div  className='h-[40px] rounded-r-full   bg-red-600 w-2/3 '></div></Slide>
       <Slide  >  <div  className='h-[40px]  rounded-r-full      bg-black w-1/3'></div></Slide> */}
       {/* <Skill2/> */}
      
       <AllprojectDiv/>


       <Courses/>
       <ContactMe/>
        </div>
    );
};

export default Home;
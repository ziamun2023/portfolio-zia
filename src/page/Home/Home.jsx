import React from 'react';
import IntroductionSection from '../../allComponent/section-1/IntroductionSection';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import Skill from '../../allComponent/Skills/Skill';
import Skill2 from '../../allComponent/Skills/Skill2';
import { Slide } from 'react-awesome-reveal';


const Home = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotateY: [0, 360],
      });
    return (
        <div>
            <IntroductionSection/>
         
         <Skill/>
         <Slide direction='right'>  <div  className='h-[40px]  bg-gray-300 w-2/3'></div></Slide>
       <Slide >  <div  className='h-[40px]  bg-black w-full'></div></Slide>
       <Slide direction='right'>  <div  className='h-[40px] ms-[700px]  bg-gray-300 w-2/3'></div></Slide>
       <Slide  >  <div  className='h-[40px] ms-[1300px]   bg-black w-1/3'></div></Slide>
       <Skill2/>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import github from '../../assets/github2.png'
import chrome from '../../assets/chrome.png'
import dev from '../../assets/devgif.gif'
import vercel from '../../assets/vercel.png'
import html5 from '../../assets/html5.png'
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';
// import skill from '../../assets/skills.jpg'
import react from '../../assets/react.png'
import js from '../../assets/javaScript.png'
import correct from '../../assets/correct.png'
import fire from '../../assets/firebase.png'
import css3 from '../../assets/css3.png'
import mongo from '../../assets/mongo.png'
import router from '../../assets/router.png'
import html from '../../assets/html5.png'
import jwt from '../../assets/jwt.png'
import css from '../../assets/css.png'
import tailwind from '../../assets/tailwind.png'

import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['My Skills', 'Love to Do', 'Excited about', 'Expertise','Can Do It All Day']; //Text Animation
import boot from '../../assets/bootstrap.png'
import node from '../../assets/nodejs.png'
import skill2 from '../../assets/skill2.png'
import { Fade, Slide } from 'react-awesome-reveal';
import AOS from 'aos';
import skillICon from '../../assets/skilldevelope.png'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { AuthContext } from '../../provider/AuthProvider';
// ..
AOS.init();
const Skill = () => {

  const {isDarkMode}=useContext(AuthContext)
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    
    return (
      <div className=' grid lg:grid-cols-6 '>
        

<div className='col-span-3'>
<div className=' h-10 about'>

</div>
<Slide direction='left'>
  
  <div className='bg-gray-800  h-[500px] rounded-r-xl mt-20'>
  
  <ul className="circles z-0">
          
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
<p className={`text-4xl  ms-20 pt-4  text-white`}>About me</p>
<p className='text-2xl  ms-20 pt-4'>A passionate web developer , trying my best to give the best output and I never stop learning new tech.</p>
<div className='ms-20 mt-10'> 
  
<div className='flex gap-4'><img className='w-10' src={correct} alt="" /><p className='my-auto text-[30px]'>adaptable</p></div>

<div className='flex gap-4'><img className='w-10' src={correct} alt="" /><p className='my-auto text-[30px]'>enthusiasm for technology</p></div>
<div className='flex gap-4'><img className='w-10' src={correct} alt="" /><p className='my-auto text-[30px]'>self-restraint</p></div>
</div>
{/* <img className=' absolute top-[170px] left-[400px] w-[700px]' src={dev} alt="" /> */}
</div></Slide>

</div>

 
   <div className='mx-auto mt-20 w-1/2  col-span-1'>
   < >

     
    </>
 <Slide direction='up'>  <Parallax data-aos="fade-left" speed={0}> <p className={`text-7xl bg-gray-700 px-2 text-white    rounded-sm  text-center flex `}> <p className='text-2xl my-auto'>BASIC</p>
  </p></Parallax></Slide>

   


<Slide direction='up'>  <Parallax data-aos="fade-left" speed={2}> <p className={`text-7xl  runded  rounded-3xl  ${isDarkMode? "text-white" : "text-black"} text-center flex `}> <p className='text-2xl my-auto'>HTML 5</p><img className='w-[60px] px-2 my-3 py-3' src={html5} alt="" />
  </p></Parallax></Slide>
  <Slide direction='up'><Parallax speed={4} data-aos="fade-left" > <p className={`text-7xl  runded  rounded-3xl  ${isDarkMode? "text-white" : "text-black"} text-center flex`}> <p className='text-2xl my-auto flex'>Java <p className='text-red-600'>Script</p></p><img className='w-[60px] px-2 my-3 py-3' src={js} alt="" />
  </p></Parallax></Slide>
  <Slide direction='up'><Parallax speed={6} data-aos="fade-left" > <p className={`text-7xl  runded  rounded-3xl  ${isDarkMode? "text-white" : "text-black"} text-center flex`}> <p className='text-2xl my-auto flex'>CSS</p><img className='w-[60px] px-2 my-3 py-3' src={css3} alt="" />
  </p></Parallax></Slide>

    

   </div>
   <div className='mx-auto mt-20 w-1/2  col-span-1'>
   < >


     
    </>
    <Slide direction='up'>  <Parallax data-aos="fade-left" speed={0}> <p className={`text-7xl text-white rounded-sm bg-gray-700 px-2 text-center flex `}> <p className='text-2xl my-auto'>FRAMEWORK</p>
  </p></Parallax></Slide>
 <Slide direction='up'>  <Parallax data-aos="fade-left" speed={2}> <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"}text-center flex `}> <p className='text-2xl my-auto'>React JS</p><img className='w-[60px] px-2 my-3 py-3' src={react} alt="" />
  </p></Parallax></Slide>
 <Slide direction='up'>  <Parallax data-aos="fade-left" speed={4}> <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex `}> <p className='text-2xl my-auto'>BootStrap</p><img className='w-[60px] px-2 my-3 py-3' src={boot} alt="" />
  </p></Parallax></Slide>
  <Slide direction='up'>   <Parallax speed={6} data-aos="fade-left" > <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex`}> <p className='text-2xl my-auto flex'>Tailwind <p className='text-red-600'>Css</p></p><img className='w-[60px] px-2 my-3 py-3' src={tailwind} alt="" />
  </p></Parallax></Slide>
   


<Slide direction='up'>   <Parallax speed={8} data-aos="fade-left" > <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex`}> <p className='text-2xl my-auto flex'>React <p className='text-red-600'>Router</p></p><img className='w-[60px] px-2 my-3 py-3' src={router} alt="" />
  </p></Parallax></Slide>


 




    

   </div>
   <div className='mx-auto mt-20 w-1/2  col-span-1'>
   < >

     
    </>
 <Slide direction='up'>  <Parallax data-aos="fade-left" speed={0}> <p className={`text-7xl bg-gray-700 px-2 ${isDarkMode? "text-white" : "text-black"} p  text-center flex `}> <p className='text-2xl my-auto'>BACKEND</p>
  </p></Parallax></Slide>

   

  <Slide direction='up'>  <Parallax data-aos="fade-left" speed={2}> <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex `}> <p className='text-2xl my-auto'>MongoDB</p><img className='w-[60px] px-2 my-3 py-3' src={mongo} alt="" />
  </p></Parallax></Slide>
<Slide direction='up'>   <Parallax speed={4} data-aos="fade-left" > <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex`}> <p className='text-2xl my-auto flex'>Express JS</p><img className='w-[60px] px-2 my-3 py-3' src={router} alt="" />
  </p></Parallax></Slide>
<Slide direction='up'>  <Parallax data-aos="fade-left" speed={6}> <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex`}>
<p className='text-2xl my-auto'>Node</p> <img className='w-[60px] px-2 my-3 py-3' src={node} alt="" />
 </p></Parallax></Slide>


 
  <Slide direction='up'>  <Parallax data-aos="fade-left" speed={8}> <p className={`text-7xl  runded  rounded-3xl ${isDarkMode? "text-white" : "text-black"} text-center flex `}>
<p className='text-2xl my-auto'>Jwt</p> <img className='w-[60px] px-2 my-3 py-3' src={jwt} alt="" />
 </p></Parallax></Slide>

    

   </div>


   

      </div>
 
    );
};

export default Skill;
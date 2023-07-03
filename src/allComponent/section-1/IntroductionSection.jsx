import React, { useContext } from 'react';
import myself from '../../assets/myself2.jpg'

import TextTransition, { presets } from 'react-text-transition';   
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../provider/AuthProvider';
const TEXTS = ['ZIAUDDIN MUNTASIR', 'Front End Developer', 'Love to Embrace','New Technologies' ]; 
const IntroductionSection = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
    const {isDarkMode}=useContext(AuthContext)
    return (
        <div className='grid lg:grid-cols-2 z-20  '>
      
<div className='relative  z-20'>
<div>
    <img className='w-[900px] radius  shadow-stone-500 shadow-xl' src={myself} alt="" />
{/* <div className='w-[900px] h-[950px]   bg-opacity-40 radius absolute bg-yellow-400 top-0'>fsdf</div> */}
</div>
</div>
<div className='relative '>
    <p className={`${isDarkMode? " duration-500 text-white":' text-black duration-500'} font-extrabold z-30   absolute top-[170px] -left-44 text-black text-8xl `}> <h1>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1></p>
    <p className='text-gray-400 mt-[400px]'>


      Passionate about coding and try to make the best out of the little source i have .




    </p>
    <button className='border-[2px] mt-14 rounded-full px-[40px] text-3xl pt-2 pb-4 text-red-600  border-red-600'><a href="mailto:ziauddinmuntasir587@gmail.com"> gmail</a></button>
    <button className='border-[2px] mt-14 rounded-full px-[40px] text-3xl pt-2 pb-4 text-red-600  border-red-600'><a href="https://www.linkedin.com/in/ziauddin-muntasir-694432213/"> LinkEdin</a></button>

</div>
{/* <div  className='w-full absolute z-10 bottom-5  -rotate-2 bg-gray-700 h-10'></div>
<div className='w-full absolute z-10 bottom-14 -rotate-2 bg-red-600 h-10'></div> */}
        </div>
    );
};

export default IntroductionSection;
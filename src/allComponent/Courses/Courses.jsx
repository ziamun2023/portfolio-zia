import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import cert1 from '../../assets/Screenshot 2023-07-02 121523.png'
import cert2 from '../../assets/Screenshot 2023-07-02 121713.png'
import cert3 from '../../assets/Screenshot 2023-07-02 121813.png'
import { Fade, Slide } from 'react-awesome-reveal';
const Courses = () => {
    return (
        <div className='h-[1000px] mt-[200px]'>
            <Parallax data-aos="fade-left" speed={10}>     <div className='text-center flex justify-center'> <p className='text-black text-6xl my-auto'>Finished</p><p className='bg-gray-700 mx-4 w-1 my-auto h-full'></p><p className='text-7xl font-semibold text-red-600'>Courses</p></div>   </Parallax>
        

             <div className='grid ms-[300px] lg:grid-cols-2 gap-10'>
<div className=''>
<Fade direction='left'><div>
<img className='w-[800px] ' src={cert1} alt="" />
</div></Fade>
<div className='flex mt-4'>
    <p className='text-5xl text-black    py-4'>Programming With </p><Fade direction='up'><p className='text-[rgb(20,112,224)] text-6xl  shadow-2xl rounded-lg py-2 px-2 mx-2 '>Javascript</p></Fade>
</div>
</div>
<div className='grid lg:grid-rows-2'>
   <Fade direction='right'> <div >
<div className=''>
<img className='w-[450px] ' src={cert2} alt="" />
</div>
<Fade><div className='flex mt-4'>
   <Fade direction='up'> <p className='text-3xl text-[rgb(255,203,5)] shadow-xl rounded-md   '>Interactivity  </p></Fade><p className='text-black text-2xl my-auto px-2 mx-2 '>With Javascript</p>
</div></Fade>
    </div></Fade>
  <Fade direction='up'>  <div>
<div  className=''>
<img className='w-[450px] mt-5' src={cert3} alt="" />
</div>
    </div></Fade>
</div>
             </div>
        </div>
    );
};

export default Courses;
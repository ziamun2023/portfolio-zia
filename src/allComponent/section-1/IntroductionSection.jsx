import React from 'react';
import myself from '../../assets/myself2.jpg'
const IntroductionSection = () => {
    return (
        <div className='grid lg:grid-cols-2 '>
<div className='relative '>
<div><img className='w-[900px] radius  shadow-stone-500 shadow-xl' src={myself} alt="" />
{/* <div className='w-[900px] h-[950px]   bg-opacity-40 radius absolute bg-yellow-400 top-0'>fsdf</div> */}
</div>
</div>
<div className='relative '>
    <p className='font-extrabold   absolute top-[170px] -left-28 text-black text-8xl '>Ziauddin <br />Muntasir</p>
    <p className='text-gray-400 mt-[400px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ullam adipisci repellat nulla rem architecto dolor harum maiores rec Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia. Reiciendis, neque laborum? Ex corporis, labore magnam quia quis odio.usandae tem poribus.</p>
    <button className='border-[2px] mt-14 rounded-full px-[40px] text-3xl pt-2 pb-4 text-red-600  border-red-600'>Gmail</button>

</div>
        </div>
    );
};

export default IntroductionSection;
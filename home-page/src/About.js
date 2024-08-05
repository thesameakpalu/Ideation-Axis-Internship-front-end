import React from 'react';
import banlmg from './banImg.svg'

function About() {
  return (
    <div className='mt-12'>
        <p className='heading_text text-center font-medium text-4xl'><span className='text-firstButtonGradientColor'>About</span> Ideation Axis</p>
                {/* Image and About Text Div */}
      <div className='text-center w-10/12  mx-auto flex items-center justify-between '>
        <div className='image_Div '>
            <img src={banlmg} alt='Ideation-Axis-Image'></img>
            </div>
        <div className='text_Div  w-6/12 text-left space-y-9'>
            <p className='text-lg font-medium '>At IDEATION AXIS, we are committed to driving innovation and collaboration, especially tailored to elevate our services. Our team thrives on transforming inventive ideas into impactful solutions, utilizing collective creativity to meet your unique service needs. Together, we embark on a journey where innovation becomes a shared language, and teamwork is the catalyst for turning visionary concepts into reality.</p>
            <button className=' bg-gradient-to-r from-firstButtonGradientColor to-secondButtonGradientColor rounded-2xl px-4 py-2'>Learn More</button>
        </div>
      </div>

    </div>
  )
}

export default About
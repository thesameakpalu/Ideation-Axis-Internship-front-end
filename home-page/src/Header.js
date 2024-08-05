import React from 'react';
import polygon from './polygon.svg';
import imageBan from './imageBan.svg';
import verifyCard from './verifyCard.svg';
import './Header.css';



function Header() {
  return (
    
    
    <div className='mainContainer mt-16 flex justify-center gap-40'>
                {/* Div for items on the left side  */}
    <div className='text-center  space-y-9'>
        <div className='leftItemsConatiner  space-y-7'>
            <div className=' space-y-3'>
                <p className='text-3xl font-semibold  '> Leveraging <span className='text-firstButtonGradientColor'>Expertise</span> and <br /> Partnerships to Address <span className='text-firstButtonGradientColor'>Innovation</span> </p>

                <p className='font-semibold text-base'>Providing a wide of services to help grow your business</p>
            </div> 

            <div className='space-x-4'>
                    <button className='rounded-2xl bg-gradient-to-r from-firstButtonGradientColor to-secondButtonGradientColor py-2 px-9 font-medium'>Explore</button>
                    <button className='rounded-2xl border-2 border-purple-400 py-2 px-5 font-medium'>Our Latest</button>
            </div>   
        </div>
            <div className='space-y-3'>
                <p className='text-gray-500 font-medium'>Building a community of global Investors and Innovators</p>
                <div className='bg-white inline-block  w-96'>
                    <input type='text-box' placeholder='Enter email address' className=' bg-transparent '></input>
                <button className='text-white rounded-2xl bg-purple-600 py-2 px-5 font-medium '>Subscribe</button>
                </div>
            </div>
    </div>
                {/* Div for the Items on the right side  */}
        <div className='rightItemsContainer  '>
                <img src={polygon} className='polygon size-80  ml-8'></img>
                <img src={imageBan} className='image size-64 z-10 ml-9 '></img>
                <img src={verifyCard} className='image w-36 h-11 z-10  place-self-start self-center'></img>
        </div>
    </div>
  )
}

export default Header
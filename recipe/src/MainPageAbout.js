import React from 'react';
import mainImage1 from './mainImage1.jpg';
import mainImage2 from './mainImage2.jpg';
import mainImage3 from './mainImage3.jpg';
import mainImage4 from './mainImage4.jpg';

function MainPageAbout() {
  return (

    <div className='container flex  w-11/12 h-auto mx-auto bg-white justify-between'>
        <div className=' imagesSection grid grid-cols-2 w-4/12 gap-4 mx-auto my-auto'>
            <div><img src={mainImage4} className='w-48 h-48' alt='foodImage1'></img></div>
            <div className='self-end justify-self-start'><img src={mainImage2} className='w-36 h-36 ' alt='foodImage1'></img></div>
            <div  className='justify-self-end'><img src={mainImage1} className='w-36 h-36' alt='foodImage1'></img></div>
            <div><img src={mainImage3} className='w-48 h-48' alt='foodImage1'></img></div>
        </div>

        <div className='textPart w-7/12 mx-auto'>
            <div className='headingAndAbout space-y-5'>
                <div className='flex items-center text-orange-400'> <p className='font-Satisfy text-3xl'>about us</p> <div className='w-10 h-1 bg-orange-400 ml-3'></div></div>
                <div className='heading flex font-Roboto text-3xl font-extrabold '> <p>Welcome to </p>
                        <div >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    className='fill-orange-400'
                                    viewBox="0 0 36 36"
                                >
                                    <path
                                    fill="orange-400"
                                    d="M19 1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0v9c0 .127.021.249.051.367-.03.207-.051.417-.051.633 0 2.316 1.75 5.957 4 6.442V33.5a2.5 2.5 0 1 0 5 0V17.942c2.25-.485 4-4.126 4-6.442 0-.216-.021-.426-.051-.633.03-.118.051-.24.051-.367v-9zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11 0 4.658 1.275 8.56 3 9.672V33.5a2.5 2.5 0 1 0 5 0v-31A2.5 2.5 0 0 0 27.5 0z"
                                    />
                                </svg>
                        </div>
                            
                        <p>Tasty Tales</p> </div>
                    

                        <p className='w-8/12 text-gray-500'> Discover our commitment to excellence, where every recipe is a testament to our passion for fine dining.</p>
                        <p className='w-9/12 text-gray-500'>"Indulge in a dining experience that excudes luxury and sophistication, where every moment is infused with an ambiance of opulent and refinement."</p>
            </div>

            <div className='Stats flex justify-between w-64'>
                <div className='flex items-center justify-cent w-3/12 gap-3'>
                     <p className='text-orange-400 text-2xl font-bold'>60</p> <div><p className=''>Years of</p><p className='text-lg font-bold'>Expereince</p></div>
                </div>
                <div className='flex items-center justify-between w-3/12 gap-3'>
                    <div className='bg-orange-400 w-1 h-10'></div> <p className='text-orange-400 text-2xl font-bold'>15</p> <div><p>Popular</p><p className='text-base font-bold'>Master Chefs</p></div>
                </div>
            </div>
            <button className='bg-orange-400 text-white px-5 py-2 rounded-lg hover:bg-orange-300'>Read More</button>
        </div>

    </div>

    
  )
}

export default MainPageAbout
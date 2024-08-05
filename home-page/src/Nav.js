import React from 'react';
import ideationLogo from './ideationLogo.svg';
import arrow from './arrow.svg';


function Nav() {
  return (
    <div >
    {/* <img src={arrow} className=' w-32 h-30' ></img> */}
    <nav>
      
      <div className='container flex items-center justify-around mx-auto '>
        
                        {/* The Logo Bar */}
        <div className='logoBarContainer flex items-center justify-between w-36 h-10 gap-2' >
          <img src={ideationLogo} alt='logo' classname='size-10' ></img> 
          <p><span className='size-5 font-semibold'>Ideation Axis</span></p>
        </div>
                    {/* Navlinks */}
        <div>
          <ul className='flex w-96 gap-4 font-medium'>
            <li className='text-homeTextColor'>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Our Team</li>
            <li>News Letter</li>
          </ul>
        </div>
                     {/* Nav Button */}
        <button type='submit' className='rounded-2xl bg-gradient-to-r from-firstButtonGradientColor to-secondButtonGradientColor py-2 px-5 font-medium'>Contact Us</button>

      </div>
    </nav>
    </div>
    
    

    
  )
}

export default Nav
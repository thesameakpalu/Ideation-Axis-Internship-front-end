import React from 'react';

function Navbar() {
  return (
    <div className='navbar w-full h-20 bg-black flex justify-start gap-80  items-center'>
         <p className='title text-orange-400 ml-20 font-extrabold text-4xl font-Roboto'>Tasty-Tales</p>
        <ul className='navLink text-white flex gap-2 w-5/12 justify-start '>
            <li className='font-Roboto'>HOME</li>
            <li className='font-Roboto'>ABOUT</li>
            <li className='font-Roboto'>SERVICE</li>
            <li className='font-Roboto'>MENU</li>
            <li className='font-Roboto'>PAGES</li>
            <li className='font-Roboto'>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar
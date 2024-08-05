import React from 'react';
import Landing_image_Desktop from './Landing_image_Desktop.jpg'

function Header() {
  return (
    <div className='header bg-black text-white w-full h-auto flex justify-end gap-10 items-center mx-auto'>

        <div className='textDiv w-6/12 space-y-3  ml-14 mb-7'>
                <p className='headingTitle w-10/12 text-5xl font-semibold font-Roboto leading-snug '>Enjoy Hundreds of Flavors on One Website</p>
                <p className='font-Roboto'>"Welcome to our exquisite restaurant, where culinary artistry takes center stage. Our talented chefs craft dishes that are a true delight for the senses. Join us for a dining experience that combines the freshest ingredients, innovative recipes, and a warm, inviting ambiance. Reserve your table today to indulge in a gastronomic journey like no other."</p>
                <p className='text-center text-orange-400'>Book Kitchen Coaching</p>
        </div>
        <div className='imageDiv w-6/12 ml-14 '>
                <img src={Landing_image_Desktop} alt='Food-Varities' title='Landing-Image' className='h-80 w-10/12 rounded-lg'></img>
        </div>
    </div>
  )
}

export default Header
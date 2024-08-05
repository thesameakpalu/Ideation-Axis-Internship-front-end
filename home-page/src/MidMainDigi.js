import React from 'react'

function MidMainDigi() {
  return (
    <div className='main_Container text-center h-36 space-y-4 mt-5'>
        <p className='font-medium'>Be part of the  leading investors</p>
        <div className='mini_Container h-24 w-2/4 mx-auto border border-midMainColor flex items-center justify-between bg-midMainColor px-4 pt-4 rounded-2xl' >
            <div className='digi1 h-20 '>
                <p className='text-midTextColor font-semibold text-xl'>200 +</p>
                <p className=' text-base'>Our Customers</p>
            </div>
            <div className='digi2 h-20 '>
                <p className='text-midTextColor font-semibold text-xl'>120 +</p>
                <p className='text-base'>Completed Projects</p> 
            </div>
            <div className='digi3 h-20 '>
                <p className='text-midTextColor font-semibold text-xl'>98%</p>
                <p className=' text-base'>Satisfaction Rate</p>
            </div>
            <div className='digi4 h-20 '>
                <p className='text-midTextColor font-semibold text-xl'>30 +</p>
                <p className=' text-base'>Clientelle Reach</p>
            </div>
        </div>
    </div>
  )
}

export default MidMainDigi
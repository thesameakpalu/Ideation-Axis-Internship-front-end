import React from 'react';


function Cards() {
  return (
    <>
    <div className='mainBodyContents bg-sky-50 h-svh'>
        <div className='cardContentsbg bg-white w-11/12 h-4/6 mx-auto flex justify-around items-center font-Roboto'>
            <div className='card1 bg-white h-3/6 w-2/12 drop-shadow-lg hover:bg-amber-500 hover:text-gray-200   flex flex-col justify-around px-5 rounded-lg'>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    className='fill-orange-400'
                    viewBox="0 0 20 24"
                >
                    <path
                    fill="orange-400"
                    d="M18.845 17.295a7.436 7.436 0 0 0-4.089-2.754l-.051-.011-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994A7.47 7.47 0 0 0 .67 17.271l-.014.019a4.475 4.475 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.522 4.522 0 0 0-.666-2.221l.011.02zM4.5 5.29c0 2.92 1.82 7.21 5.25 7.21 3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068z"
                    />
                </svg>    
                </div>
                <p className=' font-Roboto font-bold'>Master Chefs</p>
                <p className='hover:text-white text-base font-thin'>"Meet our master chefs, the culinary artists behind every exquisite dish."</p>
            </div>
            <div className='card2 bg-white h-3/6  w-2/12 drop-shadow-lg hover:bg-amber-500 hover:text-gray-200  flex flex-col justify-around px-5 rounded-lg'>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    className='fill-orange-400'
                    viewBox="0 0 36 36"
                >
                    <path
                    fill="orange-400"
                    d="M19 1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0v9c0 .127.021.249.051.367-.03.207-.051.417-.051.633 0 2.316 1.75 5.957 4 6.442V33.5a2.5 2.5 0 1 0 5 0V17.942c2.25-.485 4-4.126 4-6.442 0-.216-.021-.426-.051-.633.03-.118.051-.24.051-.367v-9zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11 0 4.658 1.275 8.56 3 9.672V33.5a2.5 2.5 0 1 0 5 0v-31A2.5 2.5 0 0 0 27.5 0z"
                    />
                </svg>
                </div>
                <p className=' font-Roboto font-bold'>Quality Food</p>
                <p className='hover:text-white text-base font-thin'>"Savor the excellence of quality food, prepared with passion and expertise."</p>
            </div>
            <div className='card3 bg-white h-3/6 w-2/12 drop-shadow-lg hover:bg-amber-500 hover:text-gray-200 flex flex-col justify-around px-3 rounded-lg'>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    className='fill-orange-400'
                    viewBox="0 0 14 14"
                >
                    <path
                    fill="orange-400"
                    fillRule="evenodd"
                    d="M3.505.078a.75.75 0 0 1 .746.675l.285 2.833h7.549a1.431 1.431 0 0 1 1.217.6 1.432 1.432 0 0 1 .199 1.286l-1.239 3.725V9.2a1.431 1.431 0 0 1-1.417.973H4.994a1.431 1.431 0 0 1-1.431-1.24L3.08 4.135a.501.501 0 0 1-.002-.052l-.252-2.506H1.177a.75.75 0 0 1 0-1.5zm7.15 11.566a1.178 1.178 0 1 1 0 2.356 1.178 1.178 0 0 1 0-2.356m-3.969 1.178a1.178 1.178 0 1 0-2.355 0 1.178 1.178 0 0 0 2.355 0m1.626-7.759a.625.625 0 0 0-.625.625v.687H7a.625.625 0 1 0 0 1.25h.687v.687a.625.625 0 0 0 1.25 0v-.687h.687a.625.625 0 1 0 0-1.25h-.687v-.687a.625.625 0 0 0-.625-.625"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <p className=' font-Roboto font-bold'>Online Order</p>
                <p className='hover:text-white text-base font-thin'>"Order your favorite recipes conveniently through popular food delivery platforms like Zomato and Swiggy."</p>
            </div>
            <div className='card4 bg-white h-3/6 w-2/12 drop-shadow-lg hover:bg-amber-500 hover:text-gray-200 flex flex-col justify-around px-3 rounded-lg'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    className='fill-orange-400'
                    viewBox="0 0 512 512"
                >
                    <path
                    fill="orange-400"
                    d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24S0 309.3 0 296v-40C0 114.6 114.6 0 256 0s256 114.6 256 256v144.1c0 48.6-39.4 88-88.1 88l-110.3-.1c-8.3 14.3-23.8 24-41.6 24h-32c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4.1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32h-16c-35.3 0-64-28.7-64-64v-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64h-16c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                    />
                </svg>
                <p className=' font-Roboto font-bold'>Live Service</p>
                <p className='hover:text-white text-base font-thin'>"Enjoy our 24/7 live tutorial service, ensuring your food needs are met around the clock."</p>
            </div>

        </div>
    </div>

</>
  )
}

export default Cards
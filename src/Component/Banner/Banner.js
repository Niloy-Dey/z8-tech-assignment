import React from 'react';
import banner from '../assets/Images/banner-image.png'
import search from '../assets/Images/search.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex  flex-col-reverse md:flex-row	 lg:flex-row	 justify-between mx-4 mt-20'>


                {/* Left banner code start here  */}
                <div className='pt-8'>
                    <h1 class="text-4xl md:text5xl lg:text-8xl leading-tight font-bold">Take Your <br /> <span className='text-red-500'>Dreams</span> To The <br /> Next Level! </h1>
                    <p class="py-6 text-justify w-72 md:w-72 lg:w-96">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* search button code  */}
                    <div className='flex  '>
                        <input type="text" placeholder="Type here" class="input focus:outline-none outline-none rounded-none input-bordered input-error w-full max-w-xs" />
                        <button class="btn bg-red-500 hover:bg-red-500 rounded-none"><img className='w-8' src={search} alt="" /></button>
                    </div>
                </div>





                {/* Right banner code start here  */}
                <div>
                    <div className='flex justify-center items-center col lg:flex-row md:flex-row  flex-col'>
                        <img alt='' src={banner} class="w-80 md:w-72 lg:w-[500px] rounded-lg" />

                        <div className='ml-2 md:m-2 lg:ml-5 flex flex-row md:flex-col lg:flex-col'>
                            <div className='my-3 w-28  p-1'>
                                <h3 className='text-3xl text-red-500 font-bold font-mono'>100</h3>
                                <p>Subject to </p>
                                <p>Choose from</p>
                            </div>

                            <div className='my-3 w-28   p-1'>
                                <h3 className='text-3xl text-red-500 font-bold font-mono'>120+</h3>
                                <p>Subject to </p>
                                <p>Choose from</p>
                            </div>

                            <div className='my-3 w-28   p-1'>
                                <h3 className='text-3xl text-red-500 font-bold font-mono'>100</h3>
                                <p>Subject to </p>
                                <p>Choose from</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
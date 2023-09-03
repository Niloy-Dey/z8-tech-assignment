import React from 'react';
import course1 from '../assets/Images/course-1.jpg'
import course2 from '../assets/Images/course-2.jpg'
import course3 from '../assets/Images/course-3.jpg'
import course4 from '../assets/Images/course-4.jpg'
import course5 from '../assets/Images/course-5.jpg'
import profile from '../assets/Images/user1.png'
import star from '../assets/Images/star.png'
import clock from '../assets/Images/clock.png'
import book from '../assets/Images/book.png'
import user from '../assets/Images/user.png'
import video from '../assets/Images/video-camera.png'
import love from '../assets/Images/love.png'
const Courses = () => {
    return (
        <div className='my-40 container mx-auto text-center'>

            <div className='text-center mb-20'>
                <h1 className=' text-5xl font-bold'>Our Top Selling Courses</h1>
                <p className=' mt-5 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, pariatur!</p>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-4 lg:gap-16 justify-center items-center'>

                {/* single card 1 start here  */}
                <div class="card mx-auto  rounded-none w-80 md:w-80 lg:w-96 bg-base-100 shadow-xl   ">
                    <div className='relative'>
                        <figure><img src={course2} alt="Shoes" /></figure>
                        <p className='absolute top-3 left-3 '><img className='w-6 cursor-pointer' src={love} alt="" /></p>
                        <p className='absolute bottom-1 right-1  bg-white px-3 py-1 font-bold text-red-500'>30 % off</p>
                    </div>
                    {/* card body code start here */}
                    <div class="card-body">
                        <div className='flex justify-between'>
                            <div className='flex justify-enter items-center '>
                                <img className='w-16' src={profile} alt="" />
                                <h4 className='text-xl mx-4 font-bold '>Newton </h4>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-7 mr-4' src={star} alt="" />
                                <p className='text-xl'>(4.5)</p>
                            </div>
                        </div>

                        <h2 class="card-title">Artificial Intelligence Course</h2>
                        <div className='flex  justify-between'>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={book} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={clock} alt="" /> 1 hr 40 min</p>
                            </div>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={user} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={video} alt="" /> 1 hr 40 min</p>
                            </div>
                        </div>
                        <button class="btn w-full mt-4 bg-red-500 text-white hover:bg-red-500">Add To Cart</button>
                    </div>
                </div>



                {/* single card 2 start here  */}
                <div class="card mx-auto  rounded-none w-80 md:w-80 lg:w-96 bg-base-100 shadow-xl   ">
                    {/* card image code start here */}
                    <div className='relative'>
                        <figure><img src={course5} alt="Shoes" /></figure>
                        <p className='absolute top-3 left-3 '><img className='w-6 cursor-pointer' src={love} alt="" /></p>
                        <p className='absolute bottom-1 right-1  bg-white px-3 py-1 font-bold text-red-500'>30 % off</p>
                    </div>
                    {/* card body code start here */}
                    <div class="card-body">
                        <div className='flex justify-between'>
                            <div className='flex justify-enter items-center '>
                                <img className='w-16' src={profile} alt="" />
                                <h4 className='text-xl mx-4 font-bold '>Newton </h4>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-7 mr-4' src={star} alt="" />
                                <p className='text-xl'>(4.5)</p>
                            </div>
                        </div>

                        <h2 class="card-title">Artificial Intelligence Course</h2>
                        <div className='flex  justify-between'>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={book} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={clock} alt="" /> 1 hr 40 min</p>
                            </div>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={user} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={video} alt="" /> 1 hr 40 min</p>
                            </div>
                        </div>
                        <button class="btn w-full mt-4 bg-red-500 text-white hover:bg-red-500">Add To Cart</button>
                    </div>
                </div>



                {/* single card 3 start here  */}
                <div class="card mx-auto  rounded-none w-80 md:w-80 lg:w-96 bg-base-100 shadow-xl   ">
                    {/* card image code start here */}
                    <div className='relative'>
                        <figure><img src={course3} alt="Shoes" /></figure>
                        <p className='absolute top-3 left-3 '><img className='w-6 cursor-pointer' src={love} alt="" /></p>
                        <p className='absolute bottom-1 right-1  bg-white px-3 py-1 font-bold text-red-500'>30 % off</p>
                    </div>
                    {/* card body code start here */}
                    <div class="card-body">
                        <div className='flex justify-between'>
                            <div className='flex justify-enter items-center '>
                                <img className='w-16' src={profile} alt="" />
                                <h4 className='text-xl mx-4 font-bold '>Newton </h4>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-7 mr-4' src={star} alt="" />
                                <p className='text-xl'>(4.5)</p>
                            </div>
                        </div>

                        <h2 class="card-title">Artificial Intelligence Course</h2>
                        <div className='flex  justify-between'>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={book} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={clock} alt="" /> 1 hr 40 min</p>
                            </div>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={user} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={video} alt="" /> 1 hr 40 min</p>
                            </div>
                        </div>
                        <button class="btn w-full mt-4 bg-red-500 text-white hover:bg-red-500">Add To Cart</button>
                    </div>
                </div>



                {/* single card 4 start here  */}
                <div class="card mx-auto  rounded-none w-80 md:w-80 lg:w-96 bg-base-100 shadow-xl   ">
                    {/* card image code start here */}
                    <div className='relative'>
                        <figure><img src={course4} alt="Shoes" /></figure>
                        <p className='absolute top-3 left-3 '><img className='w-6 cursor-pointer' src={love} alt="" /></p>
                        <p className='absolute bottom-1 right-1  bg-white px-3 py-1 font-bold text-red-500'>30 % off</p>
                    </div>

                    {/* card body code start here */}
                    <div class="card-body">
                        <div className='flex justify-between'>
                            <div className='flex justify-enter items-center '>
                                <img className='w-16' src={profile} alt="" />
                                <h4 className='text-xl mx-4 font-bold '>Newton </h4>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-7 mr-4' src={star} alt="" />
                                <p className='text-xl'>(4.5)</p>
                            </div>
                        </div>

                        <h2 class="card-title">Artificial Intelligence Course</h2>
                        <div className='flex  justify-between'>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={book} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={clock} alt="" /> 1 hr 40 min</p>
                            </div>
                            <div>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={user} alt="" /> 10 lesson </p>
                                <p className='flex pb-2'><img className='w-5 mr-4' src={video} alt="" /> 1 hr 40 min</p>
                            </div>
                        </div>
                        <button class="btn w-full mt-4 bg-red-500 text-white hover:bg-red-500">Add To Cart</button>
                    </div>
                </div>



            </div>

            <button class="btn mt-16 bg-red-500 px-8 text-white hover:bg-red-500">View All Courses </button>
        </div>
    );
};

export default Courses;
import React from 'react';
import navLogo from '../assets/Images/nav-logo.png'
import user from '../assets/Images/user.png'
import cart from '../assets/Images/add-to-cart.png'
const Navbar = () => {
    return (
        <div>
            <div className="container mx-auto  navbar py-5">
                <div className="navbar-start">


                    {/* Dropdown code start here  */}
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-50 rounded-box w-52">
                            <li className='px-3 font-serif	 font-semibold text-sm'>Home</li>
                            <li className='px-3 font-serif	 font-semibold text-sm'>Service</li>
                            <li className='px-3 font-serif	 font-semibold text-sm'>Popular Courses</li>
                            <li className='px-3 font-serif	 font-semibold text-sm'>Top Selling Courses</li>
                            <li className='px-3 font-serif  font-semibold text-sm'>All Courses</li>
                        </ul>
                    </div>

                    {/*navbar logo start here  */}
                    <p className=" flex  justify-center items-center  cursor-pointer normal-case text-lg md:text-3xl lg:text-3xl font-serif font-bold "> <img className='w-5 md:w-10 lg:w-10' src={navLogo} alt="" />E-Choaching</p>
                </div>

                {/* Navbar center element start here  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='px-3 font-serif	text-xl  cursor-pointer  '>Home</li>
                        <li className='px-3 font-serif	text-xl  cursor-pointer  '>Service</li>
                        <li className='px-3 font-serif	text-xl  cursor-pointer  '>Popular Courses</li>
                        <li className='px-3 font-serif	text-xl  cursor-pointer  '>Top Selling Courses</li>
                        <li className='px-3 font-serif  text-xl  cursor-pointer '>All Courses</li>
                    </ul>
                </div>

                {/* navbar cart and sign in button start here  */}
                <div className="navbar-end">
                    <button><img className='w-7 mx-5 cursor-pointer ' src={cart} alt="" /></button>
                    <button className="btn btn-sm md:btn-lg lg:btn-lg font-serif cursor-pointer  bg-red-500 hover:bg-red-500"> <img className='w-4 md:w-5 lg:w-5' src={user} alt="" />  Sign/Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import navLogo from '../assets/Images/nav-logo.png'
import user from '../assets/Images/user.png'
import cart from '../assets/Images/add-to-cart.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar py-5">
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
                    <p className=" flex  justify-center items-center normal-case text-2xl font-serif font-bold "> <img className='w-10' src={navLogo} alt="" />E-Choaching</p>
                </div>

                {/* Navbar center element start here  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='px-3 font-serif	 font-semibold text-sm'>Home</li>
                        <li className='px-3 font-serif	 font-semibold text-sm'>Service</li>
                        <li className='px-3 font-serif	 font-semibold text-sm'>Popular Courses</li>
                        <li className='px-3 font-serif	 font-semibold text-sm'>Top Selling Courses</li>
                        <li className='px-3 font-serif  font-semibold text-sm'>All Courses</li>
                    </ul>
                </div>

                {/* navbar cart and sign in button start here  */}
                <div className="navbar-end">
                    <button><img className='w-7 mx-5' src={cart} alt="" /></button>
                    <button className="btn font-serif bg-red-100 hover:bg-red-100"> <img className='w-5' src={user} alt="" />  Sign/Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
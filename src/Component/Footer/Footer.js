import React from 'react';
import choaching from '../assets/Images/choaching.png'
const Footer = () => {
    return (
        <div>
            <footer class="footer container mx-auto px-10  text-base-content font-serif text-xl pb-24">
                <aside>
                    <img className='w-52' src={choaching} alt="" />
                    
                    <p className='text-xl font-bold'>E coaching academy </p>
                </aside>
                <nav>
                    <header class="footer-title">Services</header>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header class="footer-title">Company</header>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header class="footer-title">Legal</header>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
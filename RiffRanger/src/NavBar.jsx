import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };
const [isClicked, setClicked] = useState(false);
const toggleClicked = () => {
  setClicked(!isClicked);
}
  return (
    <div className='shadow-md text-xl mt-2 flex justify-between fixed top-0 w-full p-2 z-10'>
      <div className='text-3xl ml-4 mt-2 font-bold items-center'>
        <img src='' className='w-6' alt='' /> RiffRanger
      </div>
      
      <div className='navbar-items mt-2 '>
      <ul className={`text-2xl gap-6 flex justify-center items-center ${isClicked ? 'navbar-items active ' : 'navbar-items'}`}>
<li className='text-2xl'><a href='#'>COURSES</a></li>
          <li><a href='#'>TOOLS</a></li>
          <li><a href='#'>EXPLORE</a></li>
          <li><a href='#'>COMMUNITY</a></li>
          <li><a href='#'>STORE</a></li>
        </ul>
      
      </div>
      <div className='login-button gap-6 mt-2 mr-4'>
        <button className='login-btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white'>
          LOG IN
        </button>
        
      </div>
      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && ( */}
      <div className='icons mt-2'>
        {isClicked ? <FaTimes onClick={toggleClicked} /> : <FaBars onClick={toggleClicked} />}
      </div>

      
      {/* )} */}
    </div>
  );
}
import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import './NavBar.css';
import {Link} from 'react-router-dom'
export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='shadow-md text-xl mt-3 flex flex-row justify-between fixed top-0 w-full p-4 z-10'>
      <div className='text-3xl font-bold flex flex-row items-center'>
        <img src='' className='w-10' alt='' /> RiffRanger
      </div>
      
      <div className='navbar-items flex flex-row gap-4 mt-4 '>
          <ul className="flex flex-row justify-center items-center gap-3">
          <li><a href='#'>COURSE</a></li>
          <li><a href='#'>TOOLS</a></li>
          <li><a href='#'>EXPLORE</a></li>
          <li><a href='#'>COMMUNITY</a></li>
          <li><a href='#'>STORE</a></li>
        </ul>
      
      </div>
      <div className='login-button flex gap-4 mt-4'>
        <button className='login-btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white'>
          LOG IN
        </button>
        <button className='login-btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white'>
          SIGN UP
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=''>
          <ul className='list-none'>
            <li><a href='#'>COURSE</a></li>
            <li><a href='#'>TOOLS</a></li>
            <li><a href='#'>EXPLORE</a></li>
            <li><a href='#'>COMMUNITY</a></li>
            <li><a href='#'>STORE</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
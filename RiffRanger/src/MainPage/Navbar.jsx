import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import '../NavBar.css'

export function Navbar() {
  return (
    <div className='navbar-container text-2xl flex justify-between fixed top-0 w-full p-4 z-10 '>
      <img src="\src\assets\RiffRanger-logos_transparent.png" alt="" className="w-10" / >
      
      <div className='navbar-items items-center '>
        <NavItem link="#" text="COURSES" />
        <NavItem link="#" text="SONGS" />
        <NavItemWithDropdown text="TOOLS" />
        <NavItem link="#" text="COMMUNITY" />
       
        </div>
      <div className='login-button flex gap-4'>
      <button className='login-btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r from from-secondary to-primary '>LOG IN</button>
      <button className='login-btn bg-gradient-to-r from-primary to-secondary'>SIGN UP</button>
      
        
      </div>
    </div>
  );
}

const NavItem = ({ link, text }) => (
  <ul className='nav-item'>
    <a href={link} className='nav-link'>
      {text}
    </a>
  </ul>
);

const NavItemWithDropdown = ({ text }) => (
  <ul className='nav-item dropdown'>
    <button className='nav-link with-dropdown'>
      {text} <MdOutlineArrowDropDown />
    </button>
    {/* Add dropdown content here if needed */}
  </ul>
);
import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import './NavBar.css'
export function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-items items-center'>
        <NavItem link="#" text="COURSES" />
        <NavItem link="#" text="SONGS" />
        <NavItemWithDropdown text="TOOLS" />
        <NavItem link="#" text="EXPLORE" />
        <NavItem link="#" text="STORE" />
      </div>
      <div className='login-button'>
        <button className='login-btn'>LOG IN</button>
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
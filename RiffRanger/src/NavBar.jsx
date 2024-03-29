import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function NavBar() {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };
const [isClicked, setClicked] = useState(false);
const [isDropDownOpen,setisDropDownOpen]=useState(false)
const toggleClicked = () => {
  setClicked(!isClicked);
}
const toggleDropDown = () => {
  setisDropDownOpen(true);
}
const closeDropDown = () => {
  setisDropDownOpen(false);
}
  return (
    <div className='shadow-md text-xl mt-2 flex justify-between fixed top-0 w-full p-2 z-10'>
      <div className='text-3xl ml-4 mt-2 font-bold items-center'>
        <img src='' className='w-6' alt='' /> RiffRanger
      </div>
      
      <div className='navbar-items mt-2 '>
      <ul className={`text-2xl gap-6 flex justify-center items-center ${isClicked ? 'navbar-items active ' : 'navbar-items'}`}>
          <Link to={`courses`}>COURSES</Link>
          <li className="relative" onClick={toggleDropDown}>
            <span>TOOLS</span>
            {isDropDownOpen && (
              <div className=" flex flex-col absolute top-full left-0 bg-white shadow-md mt-2 py-2 rounded-lg" onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}>
                <Link to={`tools/metronome`} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Metronome</Link>
                <Link to={`tools/soundGuessingGame`} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Sound Guessing Game</Link>
                <Link to={`tools/chordLibrary`} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Chord Library</Link>
                <Link to={`tools/glossary`} className='block px-4 py-2 hover:bg-gray-100'>Glossary</Link>
              </div>
            )}
          </li>
          <Link to={`community`}>COMMUNITY</Link>
          <Link to={`store`}>STORE</Link>
          <Link to={`explore`}>EXPLORE</Link>
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
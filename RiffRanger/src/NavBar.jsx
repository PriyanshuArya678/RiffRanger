import React, { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './Store/userStatusSlice';

export default function NavBar() {
  const [isClicked, setClicked] = useState(false);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.userStatus);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    window.location.reload();
  }

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
    <div className='bg-color1 text-white shadow-md text-xl flex justify-between items-center w-full p-4'>
      <div className='text-3xl ml-4 mt-2 font-bold'>
        <Link to="/" className="text-">RiffRanger</Link>
      </div>
      <div className='navbar-items mt-2 mr-4'>
        <ul className={`text-2xl font-bold gap-6 flex justify-center items-center ${isClicked ? 'navbar-items active ' : 'navbar-items'}`}>
          <li className="main-links relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full ">
            <Link to={`courses`}>COURSES</Link>
          </li>
          <li className="main-links relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
            <Link to={`community`}>COMMUNITY</Link>
          </li>
          <li className="relative" onClick={toggleDropDown}>
            <button className="main-links relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">TOOLS</button>
            {isDropDownOpen && (
              <div className="inlist dropdown flex flex-col absolute bg-slate-400 right-0 shadow-md mt-2 py-2 rounded-lg z-50" onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}>
                <Link to={'tools/metronome'} className='block px-4 py-2 border-b hover:text-black '>Metronome</Link>
                <Link to={`tools/soundGuessingGame`} className='block px-4 py-2 border-b hover:text-black border-gray-200'>Sound Guessing Game</Link>
                <Link to={`tools/chordLibrary`} className='block px-4 py-2 border-b hover:text-black border-gray-200'>Chord Library</Link>
                <Link to={`tools/glossary`} className='block px-4 py-2 hover:text-black'>Glossary</Link>
              </div>
            )}
          </li>
          <li className="main-links relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full">
            <Link to={`store`}>STORE</Link>
          </li>
          
          {window.innerWidth < 970 && (
            <li>
              <button className='login-btn md:hidden bg-gradient-to-r w-40 from-primary to-secondary hover:from-secondary hover:to-primary text-white'>
                <Link to={`Login`}>LOG IN</Link>
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className='flex justify-center items-center gap-6 mt-2'>
        <button className="p-4 hidden md:block rounded-2xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white transition-color transition-duration-500 ease-in-out">
          {userStatus.userStatus.loggedIn ? <button onClick={handleLogout} className='flex justify-center items-center'>LOGOUT</button> : <Link to="Login" className="link">LOG IN</Link>}
        </button>
      </div>
      <div className='icons mt-2'>
        {isClicked ? <FaTimes onClick={toggleClicked} /> : <FaBars onClick={toggleClicked} />}
      </div>
    </div>
  );
}

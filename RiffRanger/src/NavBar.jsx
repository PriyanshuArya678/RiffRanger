import React, { useState,useEffect } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'
export default function NavBar() {
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
const [loggedIn,setLoggedIn]=useState(false)
useEffect(()=>{
  const token=document.cookie.slice(4)
  console.log(token)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
  async function getAuth(){
    if(token){
      const response=await axios.post('http://localhost:3000/Auth',{
      Headers: headers
      })
      console.log(response)
      if(response.status==200){setLoggedIn(true)}
    }
  }
  getAuth()
},[])
  return (
    <div className='shadow-md text-xl mt-2 flex justify-between fixed top-0 absolute w-full p-2 '>
      <div className='text-3xl ml-4 mt-2 font-bold items-center'>
  <Link to="/" className="text-">RiffRanger</Link>
</div>
      <div className='navbar-items mt-2 mr-4'>
  <ul className={`text-2xl gap-6 flex justify-center items-center ${isClicked ? 'navbar-items active ' : 'navbar-items'}`}>
    <li className="main-links"><Link to={`courses`}>COURSES</Link></li>
    <li className="main-links"><Link to={`community`}>COMMUNITY</Link></li>
    <li className="relative" onClick={toggleDropDown}>
      <span>TOOLS</span>
      {isDropDownOpen && (
        <div className=" inlist dropdown flex flex-col absolute bg-slate-400 right-0 shadow-md mt-2 py-2 rounded-lg" onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}>
          <Link to={'tools/metronome'} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Metronome</Link>
          <Link to={`tools/soundGuessingGame`} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Sound Guessing Game</Link>
          <Link to={`tools/chordLibrary`} className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'>Chord Library</Link>
          <Link to={`tools/glossary`} className='block px-4 py-2 hover:bg-gray-100'>Glossary</Link>
        </div>
      )}
    </li>
    <li className="main-links"><Link to={`store`}>STORE</Link></li>
    <li className="main-links"><Link to={`explore`}>EXPLORE</Link></li>
    {window.innerWidth<970 &&( <li><button className='login-btn md:hidden bg-gradient-to-r w-40 from-primary to-secondary hover:from-secondary hover:to-primary text-white'>
    <Link to ={`Login`}>LOG IN</Link> 
        </button></li>)}
   
   
  </ul>
</div>


      <div className='login-button gap-6 mt-2 mr-4'>
        <button className='login-btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white'>

         <Link to ={`Login`}>LOG IN</Link>:
        </button>
      </div>
      <div className='icons mt-2'>
        {isClicked ? <FaTimes onClick={toggleClicked} /> : <FaBars onClick={toggleClicked} />}
      </div>
    </div>
  );
}
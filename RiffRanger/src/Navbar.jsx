import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
export function Navbar() {
  return (
    
    <div className='flex flex-row space-x-11 p-4 items-center justify-between bg-neutral-800'>
        <div className='flex flex-row space-x-11 mx-auto'>
        <ul className='text-white rounded-2xl p-2 py-2'><a href="#">COURSES</a></ul>
        <ul className='text-white rounded-2xl p-2 py-2'><a href="#">SONGS</a></ul>
        <ul className='text-white rounded-2xl p-2 py-2 flex flex-row items-end'>
            <button  className=''>TOOLS</button>
            <MdOutlineArrowDropDown />    
        </ul>
        <ul className='text-white rounded-2xl p-2 py-2'><a href="#">EXPLORE</a></ul>
        <ul className='text-white rounded-2xl p-2 py-2'><a href="#">STORE</a></ul>
        </div>
        <ul ><button className='bg-blue-600 p-2 rounded-2xl hover:bg-blue-900 text-white'>LOG IN</button></ul>
    </div>
  )
}
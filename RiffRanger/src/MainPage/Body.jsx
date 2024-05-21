import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
// import '../body.css';
import Motivation from './Motivation';
import Lottie from "lottie-react";
import Ani from "../assets/Ani3.json";
import { Link } from 'react-router-dom';

export default function Body() {
  const style ={
    width:"600px"
  }

  // Function to check if the screen size is smaller than the small breakpoint
  // const isSmallScreen = () => {
  //   return window.matchMedia("(max-width: 640px)").matches;
  // };

  return (
    <div className='Main'>
      <div className="grid md:grid-cols-2 md:items-center">
      
      {/* {!isSmallScreen() && <Lottie style={style} animationData={Ani}/>} */}
          <div className='ml-10 '>
          <div className=' lg:text-center '>
            <div className="main-text text-4xl lg:text-6xl font-semibold">
              LEARN AND MASTER THE ART OF <span className="text-blue-400">GUITAR</span>
            </div>
            <div className='mt-10 text-xl lg:text-2xl text-center'>
              Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!
            </div>
            
            <div className="flex gap-24 ml-10 justify-center">
            <button className="py-6 px-4 mt-4 rounded-lg float-start bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold transition-colors"> <Link to="Login" className="link">GET STARTED</Link></button>
            <button className="py-6 px-8 mt-4 rounded-lg float-start bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold transition-colors "> GO TO BLOGS</button>
          
            </div>
            
          </div>
        </div>
        <Lottie style={style} animationData={Ani} className="hidden md:block lg-block"/>
      
      </div>
      </div>
  );
}

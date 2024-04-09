import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
import '../body.css';
import Motivation from './Motivation';
import Lottie from "lottie-react";
import Ani from "../assets/Ani2.json";

export default function Body() {
  const [typedText, setTypedText] = useState('');
  const [showSecondText, setShowSecondText] = useState(false);
  const style ={
    width:"600px"
  }

  // Function to check if the screen size is smaller than the small breakpoint
  const isSmallScreen = () => {
    return window.matchMedia("(max-width: 640px)").matches;
  };

  return (
    <div className='Main mt-20'>
      <div className="flex flex-row-reverse justify-evenly items-center w-full">
        {/* Conditionally render Lottie component based on screen size */}
        {!isSmallScreen() && <Lottie style={style} animationData={Ani}/>}
        {/* <img src={mainImage} alt="" className="mt-38 py-20 " /> */}
        <div className='ml-10 pt-16'>
          <div className='md:w-1/2 text-center'>
            <div className="main-text text-6xl font-semibold">
              LEARN AND MASTER THE ART OF <span className="text-blue-400">GUITAR</span>
            </div>
            <div className='mt-10 text-2xl'>
              Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!
            </div>
            <div className="flex gap-24 ml-10">
            <button className="py-6 px-4 mt-4 rounded-lg float-start bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold transition-colors"> GET STARTED</button>
            <button className="py-6 px-8 mt-4 rounded-lg float-start bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold transition-colors "> GO TO BLOGS</button>
          
            </div>
            
          </div>
        </div>
      </div>
      </div>
  );
}

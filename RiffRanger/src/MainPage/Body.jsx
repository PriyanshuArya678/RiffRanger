import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
import '../body.css';
import Motivation from './Motivation';
import Lottie from "lottie-react";
import Ani from "../assets/Ani1.json";

export default function Body() {
  const [typedText, setTypedText] = useState('');
  const [showSecondText, setShowSecondText] = useState(false);
  const style ={
    width:"300px"
  }

  
  return (
    <div className='Main float-left'>

      <div className="flex flex-row-reverse justify-between items-center w-full">
        <Lottie style={style} animationData ={Ani}/>
        {/* <img src={mainImage} alt="" className="mt-38 py-20 " /> */}
        <div className='ml-10 pt-16'>
          <div className='md:w-1/2 text-center'>
          <div className="main-text text-black text-6xl font-semibold">
          LEARN AND MASTER THE ART OF GUITAR
        </div>
        <div className='mt-10 text-2xl'>
        Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!
      </div>
          </div>
       
        </div>

        
      </div>
      
    </div>
      );
}

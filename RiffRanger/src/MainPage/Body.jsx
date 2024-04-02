import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
import '../body.css';
import Motivation from './Motivation';

export default function Body() {
  const [typedText, setTypedText] = useState('');
  const [showSecondText, setShowSecondText] = useState(false);

  const textToType = 'LEARN AND MASTER THE ART OF GUITAR';
  const textToType2 = 'Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!'

  return (
    <div className='Main float-left'>

      <div className="flex flex-row-reverse justify-between items-center w-full">
        <img src={mainImage} alt="" className="mt-38 py-20 " />
        <div className='ml-10 pt-16'>
        <div className="main-text text-black  text-6xl font-semibold">
          {textToType}
        </div>
        <div className='mt-10 text-2xl'>
        {textToType2}
      </div>
        </div>

        
      </div>
      
    </div>
  );
}

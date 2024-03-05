import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
import '../body.css';
import Motivation from './Motivation';
export default function Body() {
  const [typedText, setTypedText] = useState('');

  const textToType = 'LEARN AND MASTER THE ART OF GUITAR';

  useEffect(() => {
    const typingDelay = 50; // Adjust the delay between each character typing

    const typeText = () => {
      for (let i = 0; i <= textToType.length; i++) {
        setTimeout(() => {
          setTypedText(textToType.slice(0, i));
        },i* typingDelay);
      }
    };

    typeText();
    
  }, []);

  return (
    <div className='Main flex flex-col justify-between'>

      <div className="flex flex-row-reverse justify-between items-center w-full">
        <img src={mainImage} alt="" className="mt-38 px-110 py-20" />

        <div className="text-black ml-10 text-6xl font-semibold">
          {typedText}
        </div>
      </div>

      <div>
        <>
          Arya is a guitarist
        </>
      </div>
    </div>
  );
}

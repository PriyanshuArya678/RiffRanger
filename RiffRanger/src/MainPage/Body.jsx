import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
import '../body.css';
import Motivation from './Motivation';

export default function Body() {
  const [typedText, setTypedText] = useState('');
  const [showSecondText, setShowSecondText] = useState(false);

  const textToType = 'LEARN AND MASTER THE ART OF GUITAR';
  const textToType2 = 'Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!'

  useEffect(() => {
    const typingDelay = 50; // Adjust the delay between each character typing

    const typeText = () => {
      for (let i = 0; i <= textToType.length; i++) {
        setTimeout(() => {
          setTypedText(textToType.slice(0, i));
          if (i === textToType.length) {
            setShowSecondText(true); // Show the second text after the main text is fully typed
          }
        }, i * typingDelay);
      }
    };

    typeText();

  }, []);

  return (
    <div className='Main flex flex-col justify-between'>

      <div className="flex flex-row-reverse justify-between items-center w-full">
        <img src={mainImage} alt="" className="mt-38 px-110 py-20" />

        <div className="main-text text-black ml-10 text-6xl font-semibold">
          {typedText}
        </div>
      </div>

      {showSecondText && (
        <div className="second-text text-black mt-6 text-lg font-semibold">
          {textToType2}
        </div>
      )}
    </div>
  );
}

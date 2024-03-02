import React from 'react';
import ChordDisplay from '../ChordDisplay';
import { Navbar } from './Navbar';
import '../body.css'; // Import your CSS file
import mainImage from '../assets/main_image.png';

export default function Body() {
  return (
    <div className='Main flex flex-col justify-between'>
      <Navbar />
      
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <img src={mainImage} alt="" className="mt-38 py-20" />
        
        <div className="text-black ml-10 text-6xl font-semibold ">
          LEARN AND MASTER THE ART OF GUITAR
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

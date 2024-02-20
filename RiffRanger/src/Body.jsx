import React from 'react';
import ChordDisplay from './ChordDisplay';
import { Navbar } from './Navbar';
import './body.css'; // Import your CSS file

export default function Body() {
  return (
    <div className='Main flex flex-col justify-between'>
      <Navbar />
      <div className="text-container">
        <h1 className="reveal-text">
          LEARN HOW TO PLAY GUITAR
        </h1>
      </div>
      <>
        Arya is a guitarist
      </>
    </div>
  );
}

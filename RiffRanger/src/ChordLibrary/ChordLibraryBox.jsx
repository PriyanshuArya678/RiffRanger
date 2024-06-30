import React from 'react';
import { Link } from 'react-router-dom';

export default function ChordLibraryBox(params) {
  return (
    <div >
      <Link to={`${params.text}`} className='text-4xl text-center transition-transform duration-500 ease-in-out hover:scale-105'>
        <div className='h-[150px] w-[250px] mx-6 my-6 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white transition-transform duration-500 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-xl'>
        {params.text}
          </div>
      </Link>
    </div>
  );
}

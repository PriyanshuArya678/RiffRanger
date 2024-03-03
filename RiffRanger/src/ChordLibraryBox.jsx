import React from 'react';

export default function ChordLibraryBox(params) {
  return (
    <div className='bg-black h-[150px] w-[250px] mx-6 my-6 flex items-center justify-center sm:rounded-md lg:rounded-xl xl:rounded-2xl border-orange-600 border-x-4 border-y-4 transition-transform duration-500 hover:transform hover:scale-110 hover:shadow-stone-700 hover:text-white'>
      <div className='text-4xl text-center text-slate-600 hover:text-white'>
        {params.text}
      </div>
    </div>
  );
}

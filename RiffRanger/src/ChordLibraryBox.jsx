import React from 'react'

export default function ChordLibraryBox(params) {
  return (
    <div className='bg-teal-800 h-[300px] w-[250px] mx-6 my-6 flex items-center justify-center'>
        <div className='text-4xl text-center'>{params.text}</div>
    </div>
  )
}

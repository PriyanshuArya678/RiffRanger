import React from 'react'
import ChordLibraryBox from './ChordLibraryBox'
export default function ChordLibrary() {
  return (
    <div className='flex flex-row flex-wrap justify-center mt-24 text-white'>
      <ChordLibraryBox text="A"/>
      <ChordLibraryBox text="B"/>
      <ChordLibraryBox text="C"/>
      <ChordLibraryBox text="D"/>
      <ChordLibraryBox text="E"/>
      <ChordLibraryBox text="F"/>
      <ChordLibraryBox text="G"/>
      
       
    </div>
  )
}


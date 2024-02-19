import React from 'react'
import ChordLibraryBox from './ChordLibraryBox'
export default function ChordLibrary() {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      <ChordLibraryBox text="A    A7
Amin
A/C#
A7sus4
Amin7
Amin7/G
Amaj7
Asus2
Aadd9
A
Amin/F#
Asus4"/>
      <ChordLibraryBox text="B"/>
      <ChordLibraryBox text="C"/>
      <ChordLibraryBox text="D"/>
      <ChordLibraryBox text="E"/>
      <ChordLibraryBox text="F"/>
      <ChordLibraryBox text="G"/>
    </div>
  )
}


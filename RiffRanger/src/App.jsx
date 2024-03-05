import { useState } from 'react'
import NavBar from './NavBar';
import Body from './MainPage/Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
import Metronome from './Metronome/Metronome';
import Motivation from './MainPage/Motivation'
import Glossary from './Glossary/Glossary';
function App() {

  return (
    <div >
      <Body/>
      {/* <ChordLibrary/> */}
      {/* <SoundGuessingGame/> */}
      {/* <Metronome/> */}
      <Motivation/>
      <NavBar/>
      {/* <Glossary/> */}
    </div>
  )
}

export default App

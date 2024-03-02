import { useState } from 'react'
import {Navbar} from './MainPage/Navbar';
import Body from './MainPage/Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
import Metronome from './Metronome/Metronome';
import Motivation from './MainPage/Motivation'
import Glossary from './Glossary/Glossary';
function App() {

  return (
    <div >
      {/* <Body/> */}
      {/* <ChordLibrary/> */}
      {/* <SoundGuessingGame/> */}
      {/* <Metronome/> */}
      {/* <Motivation/> */}
      <Glossary/>
    </div>
  )
}

export default App

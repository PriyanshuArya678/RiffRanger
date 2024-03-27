import { useState } from 'react'
import NavBar from './NavBar';
import Body from './MainPage/Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
import Metronome from './Metronome/Metronome';
import Motivation from './MainPage/Motivation'
import Glossary from './Glossary/Glossary';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <div >
      <NavBar/>
      <Outlet/>
      {/* <ChordLibrary/> */}
      {/* <SoundGuessingGame/> */}
      {/* <Metronome/> */}
      {/* <Motivation/> */}
      {/* <Glossary/> */}
    </div>
  )
}

export default App

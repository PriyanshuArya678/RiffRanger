import { useState } from 'react'
import {Navbar} from './MainPage/Navbar';
import Body from './MainPage/Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
import Metronome from './Metronome/Metronome';
import Motivation from './MainPage/Motivation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Body/>
      {/* <ChordLibrary/> */}
      {/* <SoundGuessingGame/> */}
      {/* <Metronome/> */}
      <Motivation/>
    </div>
  )
}

export default App

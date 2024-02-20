import { useState } from 'react'
import {Navbar} from './Navbar';
import Body from './Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
import Metronome from './Metronome/Metronome';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Body/>
      {/* <ChordLibrary/> */}
      {/* <SoundGuessingGame/> */}
      {/* <Metronome/> */}
    </div>
  )
}

export default App

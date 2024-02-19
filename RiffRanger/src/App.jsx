import { useState } from 'react'
import {Navbar} from './Navbar';
import Body from './Body';
import ChordLibrary from './ChordLibrary';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame';
function App() {
  const [count, setCount] = useState(0)

  return (

    <div >
      <Navbar/>

      <Body/>
      
      {/*<ChordLibrary/>*/ }
      {/* <SoundGuessingGame/> */}
    </div>
  )
}

export default App
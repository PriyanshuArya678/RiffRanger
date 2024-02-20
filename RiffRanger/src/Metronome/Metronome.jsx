import React, { useEffect, useRef, useState } from 'react'
import metronomeSound from'../assets/Audio/metronom.mp3'
function Metronome() {
    const [isRunning ,setIsRunning]=useState(false);
    const [metronome,setMetronome]=useState(1000)
    const audio =useRef(new Audio(metronomeSound))
    let intervalId
    useEffect(() => {
        console.log(isRunning)
        console.log(metronome)
        if(isRunning){
            intervalId=setInterval(()=>{
                audio.current.play()
            },metronome)
        }
        else clearInterval(intervalId)
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning,metronome]);

    const startOrStop=()=>{
        console.log(isRunning)
        setIsRunning(!isRunning)
    }

    const increase=()=>{
        setMetronome(previousValue=>previousValue-100)
    }
    const decrease=()=>{
        setMetronome(previousValue=>previousValue+100)
    }
  return (
    <div className='flex flex-row space-x-3'>
      <button onClick={startOrStop}className='bg-slate-400'>click me</button>
      <button onClick={decrease}className='bg-slate-400'>decrease </button>
      <button onClick={increase}className='bg-slate-400'>increase</button>
    </div>
  )
}

export default Metronome

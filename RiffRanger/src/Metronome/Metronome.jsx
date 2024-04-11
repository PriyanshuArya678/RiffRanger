import React, { useEffect, useRef, useState } from 'react'
import metronomeSound from'../assets/Audio/metronom.mp3'
import './Meteronome.css'
function Metronome() {
    const [isRunning ,setIsRunning]=useState(false);
    const [timebetweenBeats,settimebetweenBeats]=useState(1000);
    const [sliderPosition,setSliderPosition] = useState(0);
    const audio =useRef(new Audio(metronomeSound))
    let intervalId
    useEffect(() => {
       
        const val=1000-(10*sliderPosition);
       console.log(sliderPosition);
        settimebetweenBeats(val);
       
        if(isRunning){
            intervalId=setInterval(()=>{
                audio.current.play()
            },timebetweenBeats)
        }
        else clearInterval(intervalId)
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning,timebetweenBeats,sliderPosition]);

    const startOrStop=()=>{
        setIsRunning(!isRunning)
    }

    const increase=()=>{
        if(sliderPosition<100){
            setSliderPosition(previousValue=>parseInt(previousValue)+1)
            
        }
        
    }
    const decrease=()=>{
        if(sliderPosition>0){
            setSliderPosition(previousValue=>parseInt(previousValue)-1)
           
        }
    }
  return (
    
    // <h1>Hello</h1>
   <div className='bg-color1 '>
     <div className="container mx-auto h-screen flex flex-col justify-center items-center relative ">
     <h1 className="text-4xl mb-4 mt-20 absolute top-20 font-extrabold bg-black text-white w-50 h-20 px-5 flex flex-col justify-center items-center">METRONOME</h1>
        
         
        <div className=' flex flex-row'>
        <div className=' pr-10'>
        <button onClick={decrease}className='  bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10 ml-2 text-3xl'>-</button>
           
        
            </div>
        <div class=" w-[40rem] relative">
            <input type="range" min="0" max="100" id="slider" value={sliderPosition} onChange={(e)=>setSliderPosition(e.target.value)}></input>
            <div id="selector" style={{left : `${sliderPosition}%`}} className="absolute bottom-0">
                <div class="selectBtn"></div>
                <div id="selectValue" className="" >{Math.round(sliderPosition)}</div>
            </div>
            
            </div>  
            <div className='pl-9 '>
             <button onClick={increase}className=' mr-2 text-3xl  bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10'> + </button>
    
    
            </div>
        </div>
      
            <div className='absolute pt-20'>
            <button onClick={startOrStop} className=" bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-20 ">START</button>
            </div>
           
   <div className='flex justify-center mt-4'>
    
    </div>
      </div>
   </div>
  )
}

export default Metronome
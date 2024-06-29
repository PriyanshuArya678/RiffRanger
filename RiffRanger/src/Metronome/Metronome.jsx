import React, { useEffect, useRef, useState } from 'react'
import metronomeSound from'../assets/Audio/metronom.mp3'
import './Meteronome.css'
import Lottie from 'lottie-react';
import Ani8 from "../assets/Ani8.json";

function Metronome() {
    const [isRunning, setIsRunning] = useState(false);
    const [timebetweenBeats, settimebetweenBeats] = useState(1000);
    const [sliderPosition, setSliderPosition] = useState(0);
    const audio = useRef(new Audio(metronomeSound))
    let intervalId;

    useEffect(() => {
        const val = 1000 - (10 * sliderPosition);
        settimebetweenBeats(val);

        if (isRunning) {
            intervalId = setInterval(() => {
                audio.current.play()
            }, timebetweenBeats)
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, timebetweenBeats, sliderPosition]);

    const startOrStop = () => {
        setIsRunning(!isRunning)
    }

    const increase = () => {
        if (sliderPosition < 100) {
            setSliderPosition(previousValue => parseInt(previousValue) + 1)
        }
    }

    const decrease = () => {
        if (sliderPosition > 0) {
            setSliderPosition(previousValue => parseInt(previousValue) - 1)
        }
    }

    const style1 = {
        width: "400px"
    }

    return (
        <div className='bg-color1 h-[100%]'>
            <div className="container mx-auto h-screen flex flex-col justify-center items-center relative">
                <h1 className="text-6xl mb-4 absolute top-0 font-extrabold bg-black text-white w-50 h-20 px-5 flex flex-col justify-center items-center">METRONOME</h1>
                <div className="flex absolute top-24 lg:text-xl lg:border border-teal-400 rounded-lg">
                    <div className="text-white ml-10 mr-[10%] mt-[10%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus maiores beatae est itaque nobis! Quod quo animi eum? Tenetur voluptas molestiae hic doloribus cupiditate eius. Iste, natus illo vel quisquam ipsam architecto sunt error veritatis doloremque corporis dicta. Nesciunt esse cupiditate tempore laborum explicabo ipsa quam error nihil culpa praesentium?
                    </div>
                    <div className="hidden md:block lg:block mr-20">
                        <Lottie style={style1} animationData={Ani8} />
                    </div>
                </div>

                <div className='flex flex-row mt-[90%] bg-black '>
                    <div className='pr-10'>
                        <button onClick={decrease} className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10 ml-2 text-3xl'>-</button>
                    </div>
                    <div className="w-[40rem] relative">
                        <input type="range" min="0" max="100" id="slider" value={sliderPosition} onChange={(e) => setSliderPosition(e.target.value)} />
                        <div id="selector" style={{ left: `${sliderPosition}%` }} className="absolute bottom-0">
                            <div className="selectBtn"></div>
                            <div id="selectValue">{Math.round(sliderPosition)}</div>
                        </div>
                    </div>
                    <div className='pl-9'>
                        <button onClick={increase} className='mr-2 text-3xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10'>+</button>
                    </div>
                    <div className='absolute'>
                    <button onClick={startOrStop} className="mt-20 ml-96 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-20">START</button>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default Metronome

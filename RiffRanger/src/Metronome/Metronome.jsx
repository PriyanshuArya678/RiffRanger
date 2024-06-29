import React, { useEffect, useRef, useState } from 'react'
import metronomeSound from'../assets/Audio/metronom.mp3'
import './Meteronome.css'
import Lottie from 'lottie-react';
import Ani8 from "../assets/Ani8.json";
import Ani9 from "../assets/Ani10 (1).json";
import Ani1 from "../assets/Ani5.json";


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
    const style2 = {
        width: "200px"
    }

    return (
        <div className=' body bg-color1 h-full '>
            
            <div className="container mx-auto h-screen flex flex-col justify-center items-center relative">
            <h1 className="text-6xl mb-4 absolute top-0 font-extrabold bg-black text-white w-50 h-20 px-5 flex flex-col justify-center items-center">METRONOME</h1>
                
                <div className="flex absolute top-24 lg:text-xl rounded-lg">
                    <div className="text-white ml-10 mr-[10%] mt-[10%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus maiores beatae est itaque nobis! Quod quo animi eum? Tenetur voluptas molestiae hic doloribus cupiditate eius. Iste, natus illo vel quisquam ipsam architecto sunt error veritatis doloremque corporis dicta. Nesciunt esse cupiditate tempore laborum explicabo ipsa quam error nihil culpa praesentium?
                    </div>
                    <div className="hidden md:block lg:block mr-20">
                        <Lottie style={style1} animationData={Ani8} />
                    </div>
                    <div className='mt-[20%] lg:hidden md:hidden'>
                        <Lottie style={style2} animationData={Ani9} />
                    </div>
                </div>

                <div className='flex flex-row mt-[30%]'>
                    <div className='lg:border border-teal-40  lg:p-1 rounded-lg'>
                        <div className='flex flex-row items-center'>
                            <button onClick={decrease} className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10 ml-2 text-3xl'>-</button>
                            <div className="w-[40rem] relative mx-8">
                                <input type="range" min="0" max="100" id="slider" value={sliderPosition} onChange={(e) => setSliderPosition(e.target.value)} />
                                <div id="selector" style={{ left: `${sliderPosition}%` }} className="">
                                    <div className="selectBtn"></div>
                                    <div id="selectValue">{Math.round(sliderPosition)}</div>
                                </div>
                            </div>
                            <button onClick={increase} className='mr-3 text-3xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-10'>+</button>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button onClick={startOrStop} className="mt-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white h-10 w-48 font-bold">START/STOP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metronome

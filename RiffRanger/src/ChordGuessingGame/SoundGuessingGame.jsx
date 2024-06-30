import React, { useEffect, useState } from 'react';
import GuitarChordSound from './GuitarChordSound';
import {useSelector} from 'react-redux'
import { IoReloadCircle } from "react-icons/io5";
import Lottie from "lottie-react";
import Ani from "../assets/MyAni6.json";
import { Link } from 'react-router-dom';
const chords = [
  'A', 'Am', 'A7', 'Am7', 'Amaj7', 'Adim', 'Aaug', 'Asus2', 'Asus4',
  'B', 'Bm', 'B7', 'Bm7', 'Bmaj7', 'Bdim', 'Baug', 'Bsus2', 'Bsus4',
  'C', 'Cm', 'C7', 'Cm7', 'Cmaj7', 'Cdim', 'Caug', 'Csus2', 'Csus4',
  'D', 'Dm', 'D7', 'Dm7', 'Dmaj7', 'Ddim', 'Daug', 'Dsus2', 'Dsus4',
  'E', 'Em', 'E7', 'Em7', 'Emaj7', 'Edim', 'Eaug', 'Esus2', 'Esus4',
  'F', 'Fm', 'F7', 'Fm7', 'Fmaj7', 'Fdim', 'Faug', 'Fsus2', 'Fsus4',
  'G', 'Gm', 'G7', 'Gm7', 'Gmaj7', 'Gdim', 'Gaug', 'Gsus2', 'Gsus4'
];

const SoundGuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [choiceNums, setChoiceNums] = useState([]);
  const [countCorrect,setCountCorrect]=useState(0)
const userStatus=useSelector(state=>state.comments)
const [reload,setReload]=useState(false)
  var [count,setCount]=useState(0)
  const [displayResult,setDisplayResult]=useState(false)
  const generateRandomNumbers = () => {
    const randomNums = [];
    while (randomNums.length < 3) {
      const num = Math.floor(Math.random() * chords.length);
      if (!randomNums.includes(num)) {
        randomNums.push(num);
      }
    }
    return randomNums;
  };

  useEffect(() => {
  console.log(userStatus)

    const randomNums = generateRandomNumbers();
    setChoiceNums(randomNums);
    setRandomNumber(Math.floor(Math.random() * randomNums.length));
  }, [reload]);

  const handleClick = () => {
    console.log('Random chord:', chords[choiceNums[randomNumber]]);
  };
  const checkAnswer=(val)=>{
    if(chords[val]==chords[choiceNums[randomNumber]]){
      setCountCorrect(prevCheck=>prevCheck+1)
    }
    if(count<10){
      count++
      setCount(count)
    }else{ 
      setDisplayResult(true)
    }
    setReload(!reload)
  }
  const scrollToSection = () => {
    const section = document.getElementById('game-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      {
        displayResult?
        <div>
          <div className='flex flex-row justify-center  items-center'>
            <div className='text-red-600 text-4xl font-bold mx-4'>{countCorrect}/{count}</div>
            <div className='font-bold text-3xl'>You got {countCorrect} correct answers out of {count}!!</div>
          </div>
          <div className='flex flex-row justify-center font-bold text-3xl mt-7 items-center text-white'>
            <div>Wanna play again</div>
            <IoReloadCircle onClick={()=>{
              setCount(0)
              setReload(false)
              setCountCorrect(0)
              setDisplayResult(false)
              
            }}/>
          </div>
        </div>
        :
        <div className='flex flex-col justify-center items-center mx-10'>
           <div className=' flex flex-col items-center  lg:ml-24 p-4'>
      <div className='sm:border-b-2 sm:border-violet-500 text-white   text-3xl sm:text-4xl lg:text-4xl font-bold inline-block'>
          TRY OUT <span className='text-violet-500'>THE SOUND GAME</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row'>
      <div className='sm:w-[40%] lg:w-[40%] '>
        <Lottie animationData={Ani} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-2xl sm:text-3xl text-white mb-4 text-center lg:text-left">
          Guess the Chords by liseteining to their sound 
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
        Dive into the world of musical ear training with our interactive Sound Guessing Game. Sharpen your auditory skills as you listen closely and identify guitar chords from a variety of genres. Whether you're a novice or a seasoned player, challenge yourself with each chord and improve your ability to recognize musical tones. Explore the fun and educational experience of our Sound Guessing Game and enhance your musical proficiency one chord at a time.</p>
        <Link to=''><button
  class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
  onClick={scrollToSection}>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >SCROLL!</span
  >
</button>
</Link>
      </div>
    </div>
      </div>
      <div id='game-section' className='text-2xl font-bold mb-4 cursor-pointer text-white' onClick={handleClick}>Give it a try below!</div>
      <div className='text-xl font-bold mb-4 text-blue-400'>Click on the play button and Identify the chord from the given options</div>
      <div>{randomNumber !== null && <GuitarChordSound chord={chords[choiceNums[randomNumber]]} />}</div>
      <div className='flex flex-row space-x-4 text-white'>
        {choiceNums.map((val, index) => (
          <button onClick={()=>{checkAnswer(val)}} className='bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded' key={index}>{chords[val]}</button>
        ))}
      </div>
      <div className='font-bold m-6'>{count}/10</div>
    </div>
      }
    </div>
    
  );
};

export default SoundGuessingGame;


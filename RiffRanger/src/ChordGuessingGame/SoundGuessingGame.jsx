import React, { useEffect, useState } from 'react';
import GuitarChordSound from './GuitarChordSound';
import {useSelector} from 'react-redux'
import { IoReloadCircle } from "react-icons/io5";
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
const userStatus=useSelector(state=>state.userStatus)
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
  return (
    <div>
      {
        displayResult?
        <div>
          <div className='flex flex-row justify-center mt-48 items-center'>
            <div className='text-red-600 text-4xl font-bold mx-4'>{countCorrect}/{count}</div>
            <div className='font-bold text-3xl'>You got {countCorrect} correct answers out of {count}!!</div>
          </div>
          <div className='flex flex-row justify-center font-bold text-3xl mt-7 items-center'>
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
        <div className='flex flex-col justify-center items-center mt-40 mx-10'>
      <div className='text-2xl font-bold mb-4 cursor-pointer' onClick={handleClick}>Enhance your musical hearing by identifying chords</div>
      <div className='text-xl font-bold mb-4'>Click on the play button and Identify the chord from the given options</div>
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

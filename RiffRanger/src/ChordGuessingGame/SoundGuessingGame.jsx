import React, { useEffect, useState } from 'react';
import GuitarChordSound from './GuitarChordSound';
const chords = [
  { name: 'A', type: 'Major' },
  { name: 'B', type: 'Major' },
  { name: 'C', type: 'Major' },
  { name: 'D', type: 'Major' },
  { name: 'E', type: 'Major' },
  { name: 'F', type: 'Major' },
  { name: 'G', type: 'Major' },
  { name: 'Am', type: 'Minor' },
  { name: 'Bm', type: 'Minor' },
  { name: 'Cm', type: 'Minor' },
  { name: 'Dm', type: 'Minor' },
  { name: 'Em', type: 'Minor' },
  { name: 'Fm', type: 'Minor' },
  { name: 'Gm', type: 'Minor' },
  { name: 'A7', type: 'Dominant Seventh' },
  { name: 'B7', type: 'Dominant Seventh' },
  { name: 'C7', type: 'Dominant Seventh' },
  { name: 'D7', type: 'Dominant Seventh' },
  { name: 'E7', type: 'Dominant Seventh' },
  { name: 'F7', type: 'Dominant Seventh' },
  { name: 'G7', type: 'Dominant Seventh' },
  { name: 'Amaj7', type: 'Major Seventh' },
  { name: 'Bmaj7', type: 'Major Seventh' },
  { name: 'Cmaj7', type: 'Major Seventh' },
  { name: 'Dmaj7', type: 'Major Seventh' },
  { name: 'Emaj7', type: 'Major Seventh' },
  { name: 'Fmaj7', type: 'Major Seventh' },
  { name: 'Gmaj7', type: 'Major Seventh' },
  { name: 'Am7', type: 'Minor Seventh' },
  { name: 'Bm7', type: 'Minor Seventh' },
  { name: 'Cm7', type: 'Minor Seventh' },
  { name: 'Dm7', type: 'Minor Seventh' },
  { name: 'Em7', type: 'Minor Seventh' },
  { name: 'Fm7', type: 'Minor Seventh' },
  { name: 'Gm7', type: 'Minor Seventh' },
  { name: 'Adim', type: 'Diminished' },
  { name: 'Bdim', type: 'Diminished' },
  { name: 'Cdim', type: 'Diminished' },
  { name: 'Ddim', type: 'Diminished' },
  { name: 'Edim', type: 'Diminished' },
  { name: 'Fdim', type: 'Diminished' },
  { name: 'Gdim', type: 'Diminished' },
  { name: 'Aaug', type: 'Augmented' },
  { name: 'Baug', type: 'Augmented' },
  { name: 'Caug', type: 'Augmented' },
  { name: 'Daug', type: 'Augmented' },
  { name: 'Eaug', type: 'Augmented' },
  { name: 'Faug', type: 'Augmented' },
  { name: 'Gaug', type: 'Augmented' },
  { name: 'Asus2', type: 'Suspended 2nd' },
  { name: 'Asus4', type: 'Suspended 4th' },
  { name: 'Bsus2', type: 'Suspended 2nd' },
  { name: 'Bsus4', type: 'Suspended 4th' },
  { name: 'Csus2', type: 'Suspended 2nd' },
  { name: 'Csus4', type: 'Suspended 4th' },
  { name: 'Dsus2', type: 'Suspended 2nd' },
  { name: 'Dsus4', type: 'Suspended 4th' },
  { name: 'Esus2', type: 'Suspended 2nd' },
  { name: 'Esus4', type: 'Suspended 4th' },
  { name: 'Fsus2', type: 'Suspended 2nd' },
  { name: 'Fsus4', type: 'Suspended 4th' },
  { name: 'Gsus2', type: 'Suspended 2nd' },
  { name: 'Gsus4', type: 'Suspended 4th' },
  { name: 'Aadd9', type: 'Add9' },
  { name: 'A7sus4', type: 'Dominant 7th Suspended 4th' },
  { name: 'A9', type: 'Dominant Ninth' },
  { name: 'A13', type: 'Dominant 13th' },
  { name: 'A11', type: 'Dominant 11th' },
  { name: 'A7#9', type: 'Dominant 7th Sharp Ninth' },
  { name: 'A7b9', type: 'Dominant 7th Flat Ninth' },
  { name: 'Bb', type: 'Major' },
  { name: 'Bbm', type: 'Minor' },
  { name: 'Bb7', type: 'Dominant Seventh' },
  { name: 'Bbmaj7', type: 'Major Seventh' },
  { name: 'Bbm7', type: 'Minor Seventh' },
  { name: 'Bbdim', type: 'Diminished' },
  { name: 'Bbaug', type: 'Augmented' },
  { name: 'Bbsus2', type: 'Suspended 2nd' },
  { name: 'Bbsus4', type: 'Suspended 4th' },
  { name: 'Bbadd9', type: 'Add9' },
  { name: 'Bb7sus4', type: 'Dominant 7th Suspended 4th' },
  { name: 'Bb9', type: 'Dominant Ninth' },
  { name: 'Bb13', type: 'Dominant 13th' },
  { name: 'Bb11', type: 'Dominant 11th' },
  { name: 'Bb7#9', type: 'Dominant 7th Sharp Ninth' },
  { name: 'Bb7b9', type: 'Dominant 7th Flat Ninth' },
  { name: 'Db', type: 'Major' },
  { name: 'Dbm', type: 'Minor' },
  { name: 'Db7', type: 'Dominant Seventh' },
  { name: 'Dbmaj7', type: 'Major Seventh' },
  { name: 'Dbm7', type: 'Minor Seventh' }];

  export default function SoundGuessingGame() {
    const [randomNumber, setRandomNumber] = useState(null);
    const [choiceNums, setChoiceNums] = useState([]);
  
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
      const randomNums = generateRandomNumbers();
      setChoiceNums(randomNums);
      setRandomNumber(Math.floor(Math.random() * randomNums.length));
    }, []);
  
    const handleClick = () => {
      console.log('Random chord:', chords[choiceNums[randomNumber]].name);
    };
  
    return (
      <div>
        <div>
          <button onClick={handleClick}>Listen to this chord</button>
          {randomNumber !== null && <GuitarChordSound chord={chords[choiceNums[randomNumber]].name} />}
        </div>
        <div>
          <div className='flex flex-row space-x-4 '>
            {choiceNums.map((val, index) => (
              <button className='bg-gray-900' key={index}>{chords[val].name}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

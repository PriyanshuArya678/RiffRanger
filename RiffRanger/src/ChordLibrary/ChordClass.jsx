import React, { useEffect, useState } from 'react';
import { ChordDisplay } from '@magicdidac/chord-display';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { details } from '../chordDetails';
export default function ChordClass() {
  const { chordClass } = useParams();
  const [loading, setLoading] = useState(true);
  const [chordList, setChordList] = useState([]);
  const chordTypes = ['', '_m', '_7', '_m7', '_maj7', '_dim', '_aug', '_sus2', '_sus4'];

  async function getData(chordName) {
    const response=details[chordName]
    // const response = await axios.get(`https://api.uberchord.com/v1/chords/${chordName}`);
    const f = [];
      try {
        const fretsData = response["strings"];
        console.log(fretsData)
        for (let i = 0; i < fretsData.length; i++) {
          const val = fretsData[i];
          if (val === ' ') continue;
          if (val === 'X') {
            f.push(-1);
          } else {
            f.push(Number(val));
          }
        }
        // Use setChordList to update the chordList state
        setChordList(prevChords => {
          // Check if the chord already exists in chordList
          const chordExists = prevChords.some(chord => chord.name === chordName);
          // If chord doesn't exist, add it to the chordList
          if (!chordExists) {
            return [...prevChords, { name: chordName, frets: f }];
          }
          console.log(prevChords)
          return prevChords;
        });
      } catch (error) {
        console.log(error);
      }
    
  }

  useEffect(() => {
    async function fetchData() {
      await Promise.all(chordTypes.map((val) => getData(chordClass + val)));
      setLoading(false);
    }
    fetchData();
  }, [chordClass]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-row flex-wrap bg-white h-screen">
          {chordList.map((val, index) => (
            <div key={index} className="p-4"> 
              <ChordDisplay chord={val} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
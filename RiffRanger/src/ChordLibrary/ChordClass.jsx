import React, { useEffect, useState } from 'react';
import { ChordDisplay } from '@magicdidac/chord-display';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ChordClass() {
  const { chordClass } = useParams();
  const [loading, setLoading] = useState(true);
  const [chordList, setChordList] = useState([]);
  const chordTypes = ['', '_m', '_7', '_m7', '_maj7', '_dim', '_aug', '_sus2', '_sus4'];

  async function getData(chordName) {
    const response = await axios.get(`https://api.uberchord.com/v1/chords/${chordName}`);
    const f = [];
    if (response.status === 200) {
      try {
        const data = response.data;
        const fretsData = data[0]["strings"];
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
          return prevChords;
        });
      } catch (error) {
        console.log(error);
      }
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
        <div className='flex flex-row flex-wrap'>
          {chordList.map((val, index) => (
            <div className=''> 
            <ChordDisplay key={index} chord={val} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
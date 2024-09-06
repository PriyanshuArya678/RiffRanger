import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';
import axios from 'axios';
import { details } from '../chordDetails.js';
const GuitarChordSound = ({ chord }) => {
  const stringNotes = [
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']
  ];
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const chordName = chord[0] + '_' + chord.slice(1);
      // const response = await axios.get(`https://api.uberchord.com/v1/chords/${chordName}`);
      const response= details[chordName]
      console.log(response)
        const fretData = response['strings'];
        var string = 1;
        var noteData = [];
        for (let i = fretData.length - 1; i >= 0; i--) {
          if (fretData[i] === 'X') {
            string++;
            continue;
          }
          if (fretData[i] === ' ') continue;
          const fretNumber = Number(fretData[i]);
          const note = stringNotes[string - 1][fretNumber] + '3';
          noteData.push(note);
          string++;
        }
        setNotes(noteData);
      }
    
    getNotes();
  }, [chord]);

  async function playChord() {
    await Tone.start();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    var k = 0;
    notes.forEach((val) => {
      synth.triggerAttack(val, now + (k * 0.02));
      k++;
    });
    synth.triggerRelease(notes, now + 1);
  }

  return (
    <div>
      <button className='text-2xl font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded my-5' onClick={playChord}>Play</button>
    </div>
  );
};

export default GuitarChordSound;

import React, { useEffect, useState } from 'react';
import { ChordDisplay, getChordByName,Chords } from '@magicdidac/chord-display';
import { useParams } from 'react-router-dom';

export default function ChordClass() {
  const cChords = [
    { name: 'C', frets: [-1, 3, 2, 0, 1, 0] },
    { name: 'Cm', frets: [-1, 3, 5, 5, 4, 3] },
    { name: 'C7', frets: [-1, 3, 2, 3, 1, 0] },
    { name: 'Cmaj7', frets: [-1, 3, 2, 0, 0, 0] },
    { name: 'Cm7', frets: [-1, 3, 5, 3, 4, 3] },
    { name: 'Cdim', frets: [-1, -1, 2, 3, 2, 3] },
    { name: 'Caug', frets: [-1, 3, 2, 1, 1, -1] },
    { name: 'Csus2', frets: [-1, 3, 0, 0, 1, 3] },
    { name: 'Csus4', frets: [-1, 3, 3, 0, 1, 1] }
  ];
  const dChords = [
    { name: 'D', frets: [-1, -1, 0, 2, 3, 2] },
    { name: 'Dm', frets: [-1, -1, 0, 2, 3, 1] },
    { name: 'D7', frets: [-1, -1, 0, 2, 1, 2] },
    { name: 'Dmaj7', frets: [-1, -1, 0, 2, 2, 2] },
    { name: 'Dm7', frets: [-1, -1, 0, 2, 1, 1] },
    { name: 'Ddim', frets: [-1, -1, 0, 1, 0, 1] },
    { name: 'Daug', frets: [-1, -1, 0, 3, 3, 2] },
    { name: 'Dsus2', frets: [-1, -1, 0, 2, 3, 0] },
    { name: 'Dsus4', frets: [-1, -1, 0, 2, 3, 3] }
  ];
  const eChords = [
    { name: 'E', frets: [0, 2, 2, 1, 0, 0] },
    { name: 'Em', frets: [0, 2, 2, 0, 0, 0] },
    { name: 'E7', frets: [0, 2, 0, 1, 0, 0] },
    { name: 'Emaj7', frets: [0, 2, 1, 1, 0, 0] },
    { name: 'Em7', frets: [0, 2, 0, 0, 0, 0] },
    { name: 'Edim', frets: [0, 1, 2, 3, 2, 3] },
    { name: 'Eaug', frets: [0, 3, 3, 2, 2, 0] },
    { name: 'Esus2', frets: [0, 2, 2, 4, 0, 0] },
    { name: 'Esus4', frets: [0, 2, 2, 2, 0, 0] }
  ];
  const aChords = [
    { name: 'A', frets: [0, 0, 2, 2, 2, 0] },
    { name: 'Am', frets: [0, 0, 2, 2, 1, 0] },
    { name: 'A7', frets: [0, 0, 2, 0, 2, 0] },
    { name: 'Amaj7', frets: [0, 0, 2, 1, 2, 0] },
    { name: 'Am7', frets: [0, 0, 2, 0, 1, 0] },
    { name: 'Adim', frets: [0, 1, 2, 3, 3, 3] },
    { name: 'Aaug', frets: [1, 0, 3, 2, 2, 1] },
    { name: 'Asus2', frets: [0, 0, 2, 2, 0, 0] },
    { name: 'Asus4', frets: [0, 0, 2, 2, 3, 0] },
    { name: 'Aadd9', frets: [0, 0, 2, 2, 0, 2] },
    { name: 'A7sus4', frets: [0, 0, 2, 0, 3, 0] },
    { name: 'A9', frets: [0, 0, 2, 0, 2, 3] },
    { name: 'A13', frets: [0, 0, 2, 4, 2, 2] },
    { name: 'A11', frets: [0, 0, 0, 2, 1, 0] },
    { name: 'A7#9', frets: [0, 0, 2, 1, 3, 3] },
    { name: 'A7b9', frets: [0, 0, 2, 1, 2, 3] }
  ];
  const gChords = [
    { name: 'G', frets: [3, 2, 0, 0, 0, 3] },
    { name: 'Gm', frets: [3, 5, 5, 3, 3, 3] },
    { name: 'G7', frets: [3, 2, 0, 0, 0, 1] },
    { name: 'Gmaj7', frets: [3, 2, 0, 0, 0, 2] },
    { name: 'Gm7', frets: [3, 5, 3, 3, 3, 3] },
    { name: 'Gdim', frets: [3, 4, 5, 3, 5, 3] },
    { name: 'Gaug', frets: [3, 2, 1, 0, 0, 3] },
    { name: 'Gsus2', frets: [3, 0, 0, 0, 0, 3] },
    { name: 'Gsus4', frets: [3, 3, 0, 0, 1, 3] }
  ];
  const fChords = [
    { name: 'F', frets: [1, 3, 3, 2, 1, 1] },
    { name: 'Fm', frets: [1, 3, 3, 1, 1, 1] },
    { name: 'F7', frets: [1, 3, 1, 2, 1, 1] },
    { name: 'Fmaj7', frets: [1, 3, 2, 2, 1, 0] },
    { name: 'Fm7', frets: [1, 3, 1, 1, 1, 1] },
    { name: 'Fdim', frets: [1, -1, 0, 1, 0, 1] },
    { name: 'Faug', frets: [1, 0, 3, 2, 2, 1] },
    { name: 'Fsus2', frets: [1, 3, 3, 0, 1, 1] },
    { name: 'Fsus4', frets: [1, 3, 3, 3, 1, 1] }
  ];
            
    return (
        <div className='flex flex-row w-auto'>
            <ChordDisplay chord={getChordByName(chordClass)} />
            <ChordDisplay chord={chord} />
            <ChordDisplay chord={getChordByName(chordClass+'m')} />
            <ChordDisplay chord={getChordByName(chordClass+'#')} />
            <ChordDisplay chord={getChordByName(chordClass+'#m')} />
            <ChordDisplay chord={getChordByName(chordClass+'7')} />
            <ChordDisplay chord={getChordByName(chordClass+'m7')} />
        </div>
    );
}

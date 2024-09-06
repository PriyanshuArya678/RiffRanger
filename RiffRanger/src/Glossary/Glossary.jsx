// Glossary.js
import React, { useState } from 'react';
import Glossary_Box from './Glossary_Box';
import {
  A_musicTerms, B_musicTerms, C_musicTerms, D_musicTerms, E_musicTerms, 
  F_musicTerms, G_musicTerms, H_musicTerms, I_musicTerms, J_musicTerms, 
  K_musicTerms, L_musicTerms, M_musicTerms, N_musicTerms, O_musicTerms, 
  P_musicTerms, Q_musicTerms, R_musicTerms, S_musicTerms, T_musicTerms, 
  U_musicTerms, V_musicTerms, W_musicTerms
} from './constants.js';

const glossaryData = {
  A: A_musicTerms,
  B: B_musicTerms,
  C: C_musicTerms,
  D: D_musicTerms,
  E: E_musicTerms,
  F: F_musicTerms,
  G: G_musicTerms,
  H: H_musicTerms,
  I: I_musicTerms,
  J: J_musicTerms,
  K: K_musicTerms,
  L: L_musicTerms,
  M: M_musicTerms,
  N: N_musicTerms,
  O: O_musicTerms,
  P: P_musicTerms,
  Q: Q_musicTerms,
  R: R_musicTerms,
  S: S_musicTerms,
  T: T_musicTerms,
  U: U_musicTerms,
  V: V_musicTerms,
  W: W_musicTerms,
};

function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const alphabets = Object.keys(glossaryData);

  return (
    <div className='flex flex-col bg-color1 h-screen'>
      <div className='flex flex-row justify-center text-white font-bold text-3xl p-3'>Guitar Glossary</div>
      <div className='flex flex-wrap justify-center'>
        {alphabets.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className='text-white border m-3 px-4 py-3 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out'
          >
            {letter}
          </button>
        ))}
      </div>
      <Glossary_Box alphabet={selectedLetter} musicTerms={glossaryData[selectedLetter]} />
    </div>
  );
}

export default Glossary;

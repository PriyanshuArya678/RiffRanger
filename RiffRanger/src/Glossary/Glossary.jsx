import React from 'react';
import Glossary_Box from './Glossary_Box';
import {A_musicTerms, B_musicTerms, C_musicTerms, D_musicTerms, E_musicTerms, F_musicTerms, G_musicTerms, H_musicTerms, I_musicTerms, J_musicTerms, K_musicTerms, L_musicTerms, M_musicTerms, N_musicTerms, O_musicTerms, P_musicTerms, Q_musicTerms, R_musicTerms, S_musicTerms, T_musicTerms, U_musicTerms, V_musicTerms, W_musicTerms } from './constants';

function Glossary() {

  const alphabets=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"]
  return (
    <div className='flex flex-col bg-color1 h-screen'>
      <div className='flex flex row text-2xl p-3 justify-center text-white font-bold text-3xl'>Guitar Glossary</div>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <button onClick={()=>{openList()}} className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>A</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>B</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out '>C</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>D</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>E</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>F</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-4 py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>G</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>H</button>
          <button className='text-white border m-3 px-5 py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>I</button>
        </div>        
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>J</button>
          <button className='text-white border m-3 px-[17px] py-3 rounded-lg hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>K</button>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>L</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>M</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>N</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>O</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>P</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>Q</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>R</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>S</button>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>T</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>U</button>
        </div>
        <div className='flex flex-row'>
          <button className='text-white border m-3 px-[18px] py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>V</button>
          <button className='text-white border m-3 px-4 py-3 rounded-lg  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>W</button>
        </div>
      </div>
      <Glossary_Box alphabet="A" musicTerms={A_musicTerms} />
      <Glossary_Box alphabet="B" musicTerms={B_musicTerms} />
      <Glossary_Box alphabet="C" musicTerms={C_musicTerms} />
      <Glossary_Box alphabet="D" musicTerms={D_musicTerms} />
      <Glossary_Box alphabet="E" musicTerms={E_musicTerms} />
      <Glossary_Box alphabet="F" musicTerms={F_musicTerms} />
      <Glossary_Box alphabet="G" musicTerms={G_musicTerms} />
      <Glossary_Box alphabet="H" musicTerms={H_musicTerms} />
      <Glossary_Box alphabet="I" musicTerms={I_musicTerms} />
      <Glossary_Box alphabet="J" musicTerms={J_musicTerms} />
      <Glossary_Box alphabet="K" musicTerms={K_musicTerms} />
      <Glossary_Box alphabet="L" musicTerms={L_musicTerms} />
      <Glossary_Box alphabet="M" musicTerms={M_musicTerms} />
      <Glossary_Box alphabet="N" musicTerms={N_musicTerms} />
      <Glossary_Box alphabet="O" musicTerms={O_musicTerms} />
      <Glossary_Box alphabet="P" musicTerms={P_musicTerms} />
      <Glossary_Box alphabet="Q" musicTerms={Q_musicTerms} />
      <Glossary_Box alphabet="R" musicTerms={R_musicTerms} />
      <Glossary_Box alphabet="S" musicTerms={S_musicTerms} />
      <Glossary_Box alphabet="T" musicTerms={T_musicTerms} />
      <Glossary_Box alphabet="U" musicTerms={U_musicTerms} />
      <Glossary_Box alphabet="V" musicTerms={V_musicTerms} />
      <Glossary_Box alphabet="W" musicTerms={W_musicTerms} />
    </div>
  );
}

export default Glossary;

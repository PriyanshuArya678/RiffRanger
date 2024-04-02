import React, { useEffect } from 'react'
import * as Tone from 'tone'
const GuitarChordSound = ({ chord }) => {
  async function playChord(){
    await Tone.start();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    synth.triggerAttack("C4", now);
    synth.triggerAttack("E4", now+0.02);
    synth.triggerAttack("C4", now +0.04);
    synth.triggerAttack("G4", now +0.06);
    synth.triggerAttack("E4", now+0.08 );
    synth.triggerRelease(["C4", "E4", "C4", "G4", "E4"], now + 1);
  }
  return (
    <div>
      <button onClick={playChord}>play</button>
    </div>
    
  );
};

export default GuitarChordSound;

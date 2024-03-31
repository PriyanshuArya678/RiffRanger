import React, { useEffect } from 'react';
const GuitarChordSound = ({ chord }) => {
 
  useEffect(() => {
    // Dynamically load the scales-chords API script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.scales-chords.com/api/scales-chords-api';
    document.head.appendChild(script);

    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const play =()=>{
    
  }
  return (
    <div>
      <div onClick={() => window.location.reload(false)}>play</div>
      <div onClick={play} className="scales_chords_api" chord={chord} instrument="guitar" output="sound">
      
      </div>
    </div>
    
  );
};

export default GuitarChordSound;

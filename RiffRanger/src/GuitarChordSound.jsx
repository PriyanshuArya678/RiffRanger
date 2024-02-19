import React, { useEffect } from 'react';

const GuitarChordSound = ({ chord }) => {
 
  useEffect(() => {
    // Dynamically load the scales-chords API script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.scales-chords.com/api/scales-chords-api.js';
    document.head.appendChild(script);

    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ins className="scales_chords_api" chord={chord} instrument="guitar" output="sound">
    </ins>
  );
};

export default GuitarChordSound;

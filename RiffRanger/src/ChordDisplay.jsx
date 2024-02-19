import { useState, useEffect } from 'react';

export function ChordDisplay() {
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    // Check if the API script has been loaded
    if (window.scales_chords_api) {
      setApiLoaded(true);
    } else {
      // If not loaded, wait for the script to load
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://www.scales-chords.com/api/scales-chords-api.js';
      script.onload = () => setApiLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      {apiLoaded && (
        <ins className="scales_chords_api" chord="D#m(maj9)"></ins>
      )}
    </div>
  );
}

export default ChordDisplay;

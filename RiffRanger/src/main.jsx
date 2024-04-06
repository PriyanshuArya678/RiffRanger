import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Body from './MainPage/Body.jsx';
import Metronome from './Metronome/Metronome.jsx';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame.jsx';
import ChordLibrary from './ChordLibrary/ChordLibrary.jsx';
import Glossary from './Glossary/Glossary.jsx';
import Courses from './Courses/Courses.jsx';
import ChordClass from './ChordLibrary/ChordClass.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Body />} />
          <Route path="tools/metronome" element={<Metronome />} />
          <Route path="tools/soundGuessingGame" element={<SoundGuessingGame />} />
          <Route path="courses" element={<Courses />} />
          <Route path="tools/chordLibrary" element={<ChordLibrary />} />
          <Route path="tools/glossary" element={<Glossary />} />
          <Route path="tools/chordLibrary/:chordClass" element={<ChordClass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

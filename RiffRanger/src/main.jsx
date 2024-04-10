import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './MainPage/Body.jsx';
import Metronome from './Metronome/Metronome.jsx';
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame.jsx';
import ChordLibrary from './ChordLibrary/ChordLibrary.jsx';
import Glossary from './Glossary/Glossary.jsx';
import Courses from './Courses/Courses.jsx';
import ChordClass from './ChordLibrary/ChordClass.jsx';
import Login from './Form/Login.jsx';
import SignUp from './Form/SignUp.jsx';
import {Provider } from 'react-redux'
import { store } from './Store/store.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Body />,
      },
      {
        path: 'tools/metronome',
        element: <Metronome />,
      },
      {
        path: 'tools/soundGuessingGame',
        element: <SoundGuessingGame />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'tools/chordLibrary',
        element: <ChordLibrary />,
      },
      {
        path: 'tools/glossary',
        element: <Glossary />,
      },
      {
        path: 'tools/chordLibrary/:chordClass',
        element: <ChordClass />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
);

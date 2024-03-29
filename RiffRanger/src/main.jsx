import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './MainPage/Body.jsx'
import NavBar from './NavBar.jsx'
import Metronome from './Metronome/Metronome.jsx'
import SoundGuessingGame from './ChordGuessingGame/SoundGuessingGame.jsx'
import ChordLibrary from './ChordLibrary.jsx'
import Glossary from './Glossary/Glossary.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"",
      element:<Body/>
    },
    {
      path:"tools/metronome",
      element:<Metronome/>
    },
    {
      path:'tools',
      element:<NavBar/>
    },
    {
      path:"tools/soundGuessingGame",
      element:<SoundGuessingGame/>
    },
    {
      path:"tools/chordLibrary",
      element:<ChordLibrary/>
    },
    {
      path:"tools/glossary",
      element:<Glossary/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

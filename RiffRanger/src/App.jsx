import { useEffect } from 'react';
import Body from './MainPage/Body';
import NavBar from './NavBar/';
import Motivation from "./MainPage/Motivation"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col '>
      <NavBar/>
      <Outlet/>
      <Motivation/>
    </div>
  )
}

export default App
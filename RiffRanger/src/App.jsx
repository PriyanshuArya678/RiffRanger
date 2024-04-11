import { useEffect } from 'react';
import Body from './MainPage/Body';
import NavBar from './NavBar/';
import Motivation from "./MainPage/Motivation"
import { Outlet } from 'react-router-dom';
import {login,logout} from './Store/userStatusSlice'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
function App() {
  const dispatch =useDispatch()
  const userDetail=useSelector(state=>state.userStatus)
  // useEffect(()=>{
    
  //   async function getAuth(){
  //     const token=document.cookie.slice(4)
  //     console.log(token)
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   };
  //     if(token){
  //       const response=await axios.post('http://localhost:3000/Auth',{
  //       Headers: headers
  //     })
  //     console.log(response)
  //     if(response.status==200){
  //       console.log(response.status)
  //       dispatch(login({userEmail:response.data.userEmail,userName:response.data.userName}))
  //     }
  //     }
  //     else {dispatch(logout())
  //     console.log('ji')}
  //   }
  //   getAuth()
  // },[])
  return (
    <div className='flex flex-col '>
      <NavBar/>
      <div className='flex-1'>
      <Outlet />
      </div>
      {/* <Motivation/> */}
    </div>
  )
}

export default App
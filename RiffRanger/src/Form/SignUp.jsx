import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login,logout} from '../Store/userStatusSlice';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const handleSignUp = async(e) => {
    e.preventDefault();
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      alert('Please enter a valid name');
      return;
    }
    try {
      const res=await axios.post(
        'http://localhost:3000/SignUp',
        { name, email, password },
        { withCredentials: true }
      );
      console.log('Signup successful');
      if(res.status==201){
        navigate('/Login');
      }else userStatusSlice(logout())
    } catch (error) {
      dispatch(logout())
      console.error('Signup failed:', error);
    }
    
  };
  

  return (
    <div className='bg-black h-screen'>
      <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg  bg-black font-bold ">
      <h2 className="text-xl font-bold mb-4 text-white">Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className="mb-4">
          <label className="block text mb-2 text-white">Name:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Password:</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className='login-btn px-4 py-2 mb-4 w-96 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold'>
          
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
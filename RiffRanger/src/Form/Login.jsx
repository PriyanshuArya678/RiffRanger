import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Link component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Login',{email:email,password,password})
    // Implement your login logic here
    console.log("handling error...")
    console.log('Email:', email);
    console.log('Password:', password);
    
  
    // Check password length
    
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
  };

  return (
    <div className='bg-black font-semibold'>
      <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg mt-40">
      <h2 className="text-xl font-bold mb-4 text-white">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2 text-white">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-white">Password:</label>
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
          Login
        </button>
      </form>
      {/* Link to SignUp page */}
      <p className="text-center text-white">
        Don't have an account?{' '}
        <Link to="/SignUp" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
    </div>
  );
}

export default Login;

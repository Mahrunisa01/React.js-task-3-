
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform validation here
    // For simplicity, let's assume validation is successful
    setMessage(`Registered successfully as ${username}`);
  };

  return (
    
    <div className='container'>
      <h2 className='heading'>Registration</h2>
      <h3 className='heading2'>Welcome to floral shop.</h3>
      <form onSubmit={handleRegister}>
        <input className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input className='input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className='button'>Register</button>
      </form>
      <p>{message}</p>
      <Link to="/login" className='link'>Already have an account? Login here.</Link>
    </div>
    
  );
};



export default Registration;



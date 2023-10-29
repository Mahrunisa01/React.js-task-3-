import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation here
    // For simplicity, let's assume validation is successful
    setMessage(`Logged in successfully as ${username}`);
  };

  return (
    <div className='container'>
      <h2 className='heading'>Login</h2>
      <h3 className='heading2'>Welcome to floral shop.</h3>
      <form onSubmit={handleLogin}>
        <input className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className='button'>Login</button>
      </form>
      <p>{message}</p>
      <Link to="/register" className='link'>Don't have an account? Register here.</Link>
    </div>
  );
};

export default Login;


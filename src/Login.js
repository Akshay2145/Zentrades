import React, { useState } from 'react';
import './style.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateUsername = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setErrorMessage('Please enter a valid email address');
    } else {
      setErrorMessage('');
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+}{:;'?/\.,<>\[\]]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must including an uppercase letter and a number. Special characters allowed: @'
      );
    } else {
      setErrorMessage('');
    }
  };

  const handleLogin = () => {
    if(password === "Akshay06@") setErrorMessage('welcome')
    else setErrorMessage('wrong password')
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
        </div>
        <div style={{ color: 'red' }}>{errorMessage}</div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

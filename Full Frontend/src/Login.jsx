import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
    setPasswordError('');

    if (input.length < 8 || input.length > 16) {
      setPasswordError('Password should be 8-16 characters long');
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password should contain at least one uppercase letter');
    } else if (!/\d.*\d/.test(input)) {
      setPasswordError('Password should contain at least two numbers');
    } else if (!/[!@#$%^&*()]/.test(input)) {
      setPasswordError('Password should contain at least one special character');
    }
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setErrorMessage('');
        navigate('/HomePage');
        let token = response.data.token;
        let user = response.data.userResponse;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password,
      });

      if (response.status === 200) {
        setErrorMessage('');
        navigate('/HomePage');
        let token = response.data.token;
        let user = response.data.userResponse;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className='gbody'>
<Link to="/Slide" className="arrow-top-left">&#8592;</Link>      
<div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Registration</h1>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="signbt" type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
          <div className="overlay-panel overlay-left">
              <h1>Hello, productivity seeker!</h1>
              <p>
                Login to your account and stay organized with ease. Your tasks
                are just a few clicks away.
              </p>
              <button
                className="ghost"
                id="signIn"
                type="button"
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.remove('right-panel-active');
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Great to have you here!</h1>
              <p>Register and unlock a world of organized productivity. </p>
              <button
                className="ghost"
                id="signUp"
                type="button"
                onClick={() => {
                  const container = document.getElementById('container');
                  container.classList.add('right-panel-active');
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

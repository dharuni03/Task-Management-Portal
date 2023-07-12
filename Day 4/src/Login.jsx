import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleContactNumberChange = (e) => {
    const input = e.target.value;

    if (/^\d{0,10}$/.test(input)) {
      setContactNumber(input);
      setContactNumberError('');
    } else {
      setContactNumberError('Please enter a valid 10-digit contact number');
    }
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !contactNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }

    if (!email) {
      setEmailError('Please enter an email');
      return;
    }

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!contactNumber || contactNumber.length !== 10) {
      setContactNumberError('Please enter a 10-digit contact number');
      return;
    }

    if (!password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Rest of your form submission logic...

    // Redirect to the next page
    navigate('/Homepage');
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Registration</h1>
            <input type="text" placeholder="User Name" required />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error">{emailError}</p>}
            <input
              type="tel"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={handleContactNumberChange}
              required
            />
            {contactNumberError && (
              <p className="error">{contactNumberError}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {confirmPasswordError && (
              <p className="error">{confirmPasswordError}</p>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <input type="text" placeholder="User Name" required></input>
            <input type="password" placeholder="Password" required></input>
            <a href="#">Forgot your password?</a>
            <button className="signbt" type="submit">
              Sign In
            </button>
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

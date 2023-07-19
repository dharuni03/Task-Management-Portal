import React from 'react';
import { Link } from 'react-router-dom';
import './Front.css';
import tru from './assets/front.mp4';

const Front = () => {
  return (
    <div className="front-container">
        <div className="intro-container"><h1>To Do Sprint</h1>
          <p>Introducing Our Revolutionary Task Management Portal
          Designed to streamline your productivity and transform the way you work.
          Unleash Your Potential, Master Your Tasks
          Our task management portal empowers you to tap into your full potential by providing a centralized hub for organizing and prioritizing your tasks. Stay on top of deadlines, collaborate seamlessly, and achieve your goals like never before.</p>
        </div>
      <video src={tru} loop autoPlay>
        
      </video>
      <Link to="/Slide" className="button-container">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Front;

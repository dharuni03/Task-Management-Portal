import React from 'react';
import './HomePage.css';
import img from './assets/ToDoSprint.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <ul className="nav-area">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Image Gallery</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
        <div className="welcome-text">
          <h1>Never miss a beat with our intelligent notifications and reminders.</h1>
          <a href="#">Create Task</a>
        </div>
      </header>

      <div className="social-media-links">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>

      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

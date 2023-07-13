import React, { useState } from 'react';
import './HomePage.css';
import img from './assets/TDS.png';
import img1 from './assets/terms.png';
import img2 from './assets/privacy.png';
import img3 from './assets/faq.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Snapadd from './Snapadd.jsx';

const HomePage = () => {
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  const handleProfileClick = () => {
    setShowProfilePanel(!showProfilePanel);
  };

  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <nav className="nav-area">
            <ul>
            <li><a className="active">Home</a></li>
            <li><a >About</a></li>
            <li><Link to="/Feedback">Feedback</Link></li>
            <li><Link to="/Snapadd">Snap Add</Link></li>
            <li><Link to="/Calendar">Calendar</Link></li>
            <li><a href="#" onClick={handleProfileClick}>Profile</a></li>
          </ul>
          </nav>
        </div>
        {showProfilePanel && (
          <div className="side-panel">
            {/* Content for the profile side panel */}
            <h3>Edit Profile</h3><br></br><br></br>
            <h3>View Profile</h3><br></br><br></br>
            <h3>Logout</h3><br></br><br></br>
          </div>
        )}
        <div className="welcome-text">
          <h1>Never miss a beat with our intelligent notifications and reminders.</h1>
          <Link to="/Createtask">Create Task</Link>
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
            <li><a href={img1} target="blank">Terms and Conditions</a></li>
            <li><a href={img2} target="blank">Privacy Policy</a></li>
            <li><a href={img3} target="blank">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

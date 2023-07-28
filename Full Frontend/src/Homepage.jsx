import React, { useState } from 'react';
import './HomePage.css';
import img from './assets/TDS.png';
import img1 from './assets/terms.png';
import img2 from './assets/privacy.png';
import img3 from './assets/faq..png';
import img89 from './assets/Services.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Snapadd from './Snapadd.jsx';

const HomePage = () => {
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  const handleProfileClick = () => {
    setShowProfilePanel(!showProfilePanel);
  };

  const handleArrowClick = () => {
    setShowProfilePanel(false);
  };

  return (
    <div className='gt'>
                     

      <header className="yheader">
        <div className="ywrapper">
          <div className="ylogo">
            <img className="fff" src={img} alt="" />
          </div>
          <nav className="ynav-area">
            <ul>
              <li><a className="yactive">Home</a></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Feedback">Feedback</Link></li>
              <li><Link to="/Dashboard">Dashboard</Link></li>
              <li><Link to="/Snapadd">Snap Add</Link></li>
              <li><Link to="/Calendar">Calendar</Link></li>
              <li><a href="#" onClick={handleProfileClick}>Profile</a></li>
            </ul>
          </nav>
        </div>
        {showProfilePanel && (
          <div className="yside-panel">
            <img className='ed' src="https://img.icons8.com/?size=2x&id=26191&format=png" alt="Edit Profile" onClick={handleArrowClick}/>
            <img className='rt' src="https://img.icons8.com/?size=2x&id=11779&format=png" alt="Edit Profile"  />
            <br></br>
            <h3>Edit Profile</h3><br></br><br></br>
            <Link to="/feed" className="feed-link">
            <h3>Feedback</h3></Link><br></br><br></br>
            
            <Link to="/Login" className="logout-link">
    <h3>Logout</h3>
  </Link>
            <br></br><br></br>
          </div>
        )}
        <div className="ywelcome-text">
          <h1 className='txt'>Never miss a beat with our intelligent notifications and reminders.</h1>
          
          <Link to="/Createtask" className="ycreate-task-btn">Create Task</Link>
          <Link to="/View" className="ycreate-task-btn">View Task</Link>
          <Link to="/Delete" className="ycreate-task-btn">Delete Task</Link>
      
          <Link to="/Edittask" className="ycreate-task-btn">Edit Task</Link>
        </div>
      </header>

      <div className="ysocial-media-links">
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

      <footer className="yfooter">
        <div className="ywrapper">
          <ul className="yfooter-links">
            <li><a href={img1} target="blank">Terms and Conditions</a></li>
            <li><a href={img2} target="blank">Privacy Policy</a></li>
            <li><a href={img3} target="blank">FAQ</a></li>
            <li><a href={img89}target="blank">Services</a></li>
            <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="blank">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

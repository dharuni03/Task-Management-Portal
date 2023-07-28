import React, { useState } from 'react';
import './Feedback.css';
import img7 from './assets/unhappy.png';
import img8 from './assets/neutral.png';
import img9 from './assets/satisfied.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSendClick = async () => {
    try {
      const API_URL = 'http://localhost:9015/api/v1/feed/post'; 

      const feedbackData = {
        rating: selectedRating,
        comment,
        name,
        email,
        contact,
      };

      const response = await axios.post(API_URL, feedbackData);

      if (response.status === 200) {
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className='giff'>
      <Link to="/HomePage" className="arrow-top-left">&#8592;</Link>

      <div className="panel-container">
        <strong>How satisfied are you with our customer support performance?</strong>
        <div className="ratings-container">
          <div
            className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Unhappy')}
          >
            <img src={img7} alt="" />
            <small>Unhappy</small>
          </div>

          <div
            className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Neutral')}
          >
            <img src={img8} alt="" />
            <small>Neutral</small>
          </div>

          <div
            className={`rating ${selectedRating === 'Satisfied' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Satisfied')}
          >
            <img src={img9} alt="" />
            <small>Satisfied</small>
          </div>
        </div>

        <input
          type="text"
          className="custom-input"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          className="custom-input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          className="custom-input"
          placeholder="Contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />

        <textarea
          placeholder="Add comments or suggestions..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <div className="submit-container">
          <button className="btn7" onClick={handleSendClick}>Submit</button>
          {showMessage && <p>Thanks for giving your feedback!</p>}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

import React, { useState } from 'react';
import './Feedback.css';
import img7 from './assets/unhappy.png';
import img8 from './assets/neutral.png';
import img9 from './assets/satisfied.png';

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState('Satisfied');
  const [showMessage, setShowMessage] = useState(false);
  const [comment, setComment] = useState('');

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSendClick = () => {
    // Perform any necessary actions with the selected rating
    console.log('Selected Rating:', selectedRating);
    console.log('Comment:', comment);
    setShowMessage(true);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="panel-container">
      <strong>How satisfied are you with our customer support performance?</strong>
      <div className="ratings-container">
        <div className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`} onClick={() => handleRatingClick('Unhappy')}>
          <img src={img7}alt="" />
          <small>Unhappy</small>
        </div>

        <div className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`} onClick={() => handleRatingClick('Neutral')}>
          <img src={img8} alt="" />
          <small>Neutral</small>
        </div>

        <div className={`rating ${selectedRating === 'Satisfied' ? 'active' : ''}`} onClick={() => handleRatingClick('Satisfied')}>
          <img src={img9}alt="" />
          <small>Satisfied</small>
        </div>
      </div>
      <textarea
        placeholder="Add comments or suggestions..."
        value={comment}
        onChange={handleCommentChange}
      />
        <div className="submit-container"></div>
      <button className="btn7" onClick={handleSendClick}>Submit</button>
      {showMessage && <p>Thanks for giving your feedback!</p>}
    
    </div>

    
  );
};

export default Feedback;

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useFeedbackData() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const API_URL = 'http://localhost:9015/api/v1/feed/get'; 

        const response = await axios.get(API_URL);

        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  return feedbackData;
}

const UserFeed = () => {
  const feedbackData = useFeedbackData();

  return (
    <div>
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback) => (
            <tr key={feedback.id}>
              
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.contact}</td>
              <td>{feedback.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFeed;

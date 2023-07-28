import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Createtask.css';

const Createtask = () => {
  const [taskId, setTaskId] = useState('');
  const token = localStorage.getItem('token'); 

  const handleDelete = () => {
    if (!token) {
      console.log('No token found. Redirect to login page or handle the error.');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    };

    axios.delete(`http://127.0.0.1:8181/deleteDetails/${taskId}`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bgi">
            <Link to="/HomePage" className="arrow-top-left">&#8672;</Link>      

      <div className="appcontainer">
        <img
          className="dd"
          src="https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="task-container">
          <div className="box">
            <div className="input-container">
              <div className="task-info">
                <div>
                  <span className="task-label">Task ID:</span>
                  <input
                    type="number"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                  />
                </div>
                <button onClick={handleDelete}>Delete Task</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createtask;

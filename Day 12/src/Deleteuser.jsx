import React, { useState } from 'react';
import axios from 'axios';
import './Createtask.css';

const Createtask = () => {
  const [Id, setId] = useState(''); // Corrected variable name from 'id' to 'Id'

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete/${Id}`) // Corrected variable name from 'id' to 'Id'
      .then((response) => {
        // Handle success
        console.log(response);
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="bgi">
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
                  <span className="task-label">ID:</span>
                  <input
                    type="number"
                    value={Id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createtask;

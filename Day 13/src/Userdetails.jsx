import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Userdetails.css';

function Userdetails() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/show')
      .then((response) => {
        // Handle success
        setTasks(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <div className='ik'>
      <table className='gen'>
        <thead>
          <tr className="form-title">
            <th className="header-cell">ID</th>
            <th className="header-cell">Username</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Contact Number</th>
            <th className="header-cell">Password</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.username}</td>
              <td>{task.email}</td>
              <td>{task.contactNumber}</td>
              <td>{task.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userdetails;

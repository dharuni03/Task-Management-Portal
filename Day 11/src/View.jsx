import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './View.css';

function View() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/showDetails')
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
            <th className="header-cell">Task Name</th>
            <th className="header-cell">Task ID</th>
            <th className="header-cell">Category</th>
            <th className="header-cell">Status</th>
            <th className="header-cell">Start Date</th>
            <th className="header-cell">End Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.taskname}</td>
              <td>{task.id}</td>
              <td>{task.category}</td>
              <td>{task.status}</td>
              <td>{task.startdate}</td>
              <td>{task.enddate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;

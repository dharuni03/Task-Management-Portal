import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    taskname: '',
    category: '',
    status: '',
    startdate: '',
    enddate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8080/addDetails', formData)
      .then((response) => {
        // Handle success
        console.log(response);
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
            <h1>My Tasks to be completed</h1>
            <div className="input-container">
              <div className="input-field">
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="taskname">Task Name:</label>
                <input
                  type="text"
                  id="taskname"
                  name="taskname"
                  value={formData.taskname}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="Menstruation">Menstruation</option>
                  <option value="Study Plan">Study Plan</option>
                  <option value="Food Intake">Food Intake</option>
                  <option value="Water Intake">Water Intake</option>
                  <option value="Health">Health</option>
                  <option value="Fitness">Fitness</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Todo">Todo</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="startdate">Start Date:</label>
                <input
                  type="date"
                  id="startdate"
                  name="startdate"
                  value={formData.startdate}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="enddate">End Date:</label>
                <input
                  type="date"
                  id="enddate"
                  name="enddate"
                  value={formData.enddate}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;

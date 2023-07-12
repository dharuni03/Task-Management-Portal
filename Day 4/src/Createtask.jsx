import React, { useState } from 'react';
import {Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Createtask.css';

const Createtask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Todo');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const addTask = () => {
    if (
      newTaskName === '' ||
      newTaskDescription === '' ||
      selectedCategory === '' ||
      selectedStatus === '' ||
      !startDate ||
      !endDate
    ) {
      alert('You must fill all fields!');
    } else {
      setTasks([
        ...tasks,
        {
          name: newTaskName,
          description: newTaskDescription,
          category: selectedCategory,
          status: selectedStatus,
          startDate,
          endDate,
        },
      ]);
      setNewTaskName('');
      setNewTaskDescription('');
      setSelectedCategory('');
      setSelectedStatus('Todo');
      setStartDate(null);
      setEndDate(null);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = updatedTasks[index].name.startsWith('✓ ')
      ? updatedTasks[index].name.substr(2)
      : '✓ ' + updatedTasks[index].name;
    setTasks(updatedTasks);
  };

  return (
    <div className="bgi">
    <div className="appcontainer">
    <img className='dd' src="https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>

      <div className="task-container">
        <div className="box">
          <h2>My Tasks to be completed</h2>
          <div className="input-container">
            <div className="input-field">
              <label htmlFor="taskName">Task Name:</label>
              <input
                id="taskName"
                type="text"
                value={newTaskName}
                placeholder="Task Name..."
                onChange={(e) => setNewTaskName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="taskDescription">Task Description:</label>
              <textarea
                id="taskDescription"
                value={newTaskDescription}
                placeholder="Task Description..."
                onChange={(e) => setNewTaskDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="taskCategory">Category:</label>
              <select
                id="taskCategory"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
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
              <label htmlFor="taskStatus">Status:</label>
              <select
                id="taskStatus"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="taskStartDate">Start Date:</label>
              <DatePicker
                id="taskStartDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
              />
            </div>
            <div className="input-field">
              <label htmlFor="taskEndDate">End Date:</label>
              <DatePicker
                id="taskEndDate"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="End Date"
              />
            </div>
            <button onClick={addTask}>Add</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.name.startsWith('✓ ') ? 'checked' : ''}
                onClick={() => toggleTask(index)}
              >
                <div className="task-info">
                  <div>
                    <span className="task-label">Task Name:</span>
                    <span className="task-value">{task.name}</span>
                  </div>
                  <div>
                    <span className="task-label">Task Description:</span>
                    <span className="task-value">{task.description}</span>
                  </div>
                  <div>
                    <span className="task-label">Category:</span>
                    <span className="task-value">{task.category}</span>
                  </div>
                  <div>
                    <span className="task-label">Status:</span>
                    <span className="task-value">{task.status}</span>
                  </div>
                  <div>
                    <span className="task-label">Start Date:</span>
                    <span className="task-value">
                      {task.startDate.toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="task-label">End Date:</span>
                    <span className="task-value">
                      {task.endDate.toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span className="close" onClick={() => removeTask(index)}>
                  ×
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Createtask;

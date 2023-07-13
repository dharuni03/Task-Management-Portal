import React, { useState } from 'react';
import './Snapadd.css';

const Snapadd = () => {
  const [text, setText] = useState('');
  const [saveIndex, setSaveIndex] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    if (text.trim() === '') {
      return;
    }

    const newTask = {
      text: text,
      id: new Date().getTime().toString(),
    };

    setTasks([...tasks, newTask]);
    setText('');
  };

  const handleEditTask = () => {
    // Handle editing task logic
  };

  const handleEditButtonClick = (index) => {
    // Handle edit button click logic
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded shadow p-6 m-4 w-11/12 lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl text-indigo-600 font-medium mb-2">
            Snap Add
          </h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              name="text"
              id="text"
              placeholder="Add Todo"
              value={text}
              onChange={handleInputChange}
            />
            <input type="hidden" id="saveIndex" value={saveIndex} />
            <button
              className="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded text-white bg-indigo-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              id="add-task-btn"
              onClick={handleAddTask}
            >
              Add
            </button>
            <button
              className="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded bg-indigo-600 text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              style={{ display: saveIndex ? 'block' : 'none' }}
              id="save-todo-btn"
              onClick={handleEditTask}
            >
              Edit Todo
            </button>
          </div>
        </div>
        <div id="listBox">
          {tasks.map((task, index) => (
            <div className="task-item" key={task.id}>
              <span>{task.text}</span>
              <div>
                <button
                  className="edit-button"
                  onClick={() => handleEditButtonClick(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snapadd;

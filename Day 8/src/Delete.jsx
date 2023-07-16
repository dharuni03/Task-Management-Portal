import React, { useState } from 'react';
import {Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Createtask.css';

const Createtask = () => {

  return (
    <div className="bgi">
    <div className="appcontainer">
    <img className='dd' src="https://images.pexels.com/photos/1007023/pexels-photo-1007023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>

      <div className="task-container">
        <div className="box">
          <div className="input-container">
          <div className="task-info">
                  <div>
                    <span className="task-label">Task ID:</span>
                    <input type="number"></input>
                  </div>
            <button >Add</button>
          </div>
        </div>  
    </div>
    </div>
    </div>
    </div>
  );
};

export default Createtask;

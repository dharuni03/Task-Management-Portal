import React from 'react';
import {Link} from "react-router-dom";
import './View.css';


function View() {
  return (
    <div className='ik'>
      <table className='gen'>
        <div className="container12">
          <thead>
            <tr className="form-title">
              <th className="header-cell">Task Name</th>
              <th className="header-cell">Task Description</th>
              <th className="header-cell">Category</th>
              <th className="header-cell">Status</th>
              <th className="header-cell">Start Date</th>
              <th className="header-cell">End Date</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Userdetails.css';
import { Link } from 'react-router-dom';


function Userdetails() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  useEffect(() => {
    // Check if the token is available and valid
    if (!token) {
      console.log('No token found. Redirect to login page or handle the error.');
      // Redirect to the login page or handle the error
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the request headers
      },
    };

    axios.get('http://localhost:8181/api/v1/demo', config)
      .then((response) => {
        // Handle success
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [token]);

  // Function to handle deletion
  const handleDelete = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the request headers
      },
    };

    axios.delete(`http://localhost:8181/api/v1/demo/${id}`, config)
      .then((response) => {
        // Filter out the deleted user from the users state
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className='ik'>
                              <Link to="/Admin" className="arrow-top-left">&#8592;</Link>

      <table className='gen'>
        <thead>
          <tr className="form-title">
            <th className="header-cell">ID</th>
            <th className="header-cell">Name</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Password</th>
            <th className="header-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userdetails;

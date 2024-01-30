import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://6570054809586eff66409716.mockapi.io/User')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete(`https://6570054809586eff66409716.mockapi.io/User/${userId}`)
      .then(response => {
        alert('User deleted');
        fetchData();
        setSelectedUser(null);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const updateUser = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://6570054809586eff66409716.mockapi.io/User/${selectedUser.id}`, selectedUser)
      .then(response => {
        alert('User updated');
        fetchData();
        setSelectedUser(null);
      })
  };

  return (
    <div class="container">
  <h2>User Data from API</h2>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lasttname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.password}</td>
            <td><button class="btn btn-primary" onClick={() => updateUser(user)}>Update Data</button></td>
            <td><button class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete Data</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {selectedUser && (
    <div>
      <h2>Edit User Data</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" name="firstname" value={selectedUser.firstname} onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" name="lasttname" value={selectedUser.lasttname} onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="text" class="form-control" name="email" value={selectedUser.email} onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <label>Phone:</label>
          <input type="text" class="form-control" name="phone" value={selectedUser.phone} onChange={handleInputChange} />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="text" class="form-control" name="password" value={selectedUser.password} onChange={handleInputChange} />
        </div>
        <button type="submit" class="btn btn-primary">Update User</button>
      </form>
    </div>
  )}
</div>
  );
};

export default ApiData;

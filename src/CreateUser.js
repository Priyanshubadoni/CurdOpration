import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lasttname: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6570054809586eff66409716.mockapi.io/User', userData)
      .then(response => {
        console.log('User created:', response.data);
        setUserData({
          firstname: '',
          lasttname: '',
          email: '',
          phone: '',
          password: ''
        });
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
<div class="container">
  <h2>Create User</h2>
  <form class="needs-validation" onSubmit={handleSubmit} novalidate>
    <div class="form-group">
      <input type="text" class="form-control" name="firstname" placeholder="First Name" value={userData.firstname} onChange={handleChange} required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid first name.</div>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" name="lastname" placeholder="Last Name" value={userData.lastname} onChange={handleChange} required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid last name.</div>
    </div>
    <div class="form-group">
      <input type="email" class="form-control" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid email.</div>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid phone number.</div>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please provide a valid password.</div>
    </div>
    <button type="submit" class="btn btn-primary">Create User</button>
  </form>
</div>

  );
};

export default CreateUser;

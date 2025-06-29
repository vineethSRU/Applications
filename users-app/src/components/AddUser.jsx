import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userActions';
import './addUser.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      ...form
    };


    
    dispatch(addUser(newUser));
    toast.success(' User added successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Add User</h2>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} />

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} />

          <label htmlFor="dob">DOB*</label>
          <input type="date" id="dob" name="dob" required value={form.dob} onChange={handleChange} />

          <label htmlFor="phone">Phone Number*</label>
          <input type="number" id="phone" name="phone" required value={form.phone} onChange={handleChange} />
        </div>
        <button className="submit-btn" type="submit">Add User</button>
       
      </form>
    </div>
  );
};

export default AddUser;
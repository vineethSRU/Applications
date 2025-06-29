import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/userActions';
import './UserDetails.css';
import React, { useState } from 'react';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const user = users.find(u => String(u.id) === String(id));

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(
    user || { firstName: '', lastName: '', email: '', phone: '', dob: '' }
  );

  if (!user) return <div className='outerContainer'>User not found</div>;

  const handleDelete = () => {
    dispatch(deleteUser(id));
    navigate('/');
  };
  const handleBack = () => {
    navigate('/');
  }
  const handleUpdate = () => {
    setEditing(true);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = e => {
    e.preventDefault();
    dispatch(updateUser({ ...form, id: user.id }));
    setEditing(false);
  };
  
  return (
    <div className='outerContainer'>
      <div className='user-details'>
        <h2>Update User Details </h2>
        {editing ? (
          <form onSubmit={handleSave}>
            <label className='userForm'>First Name:</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
            <label className='userForm'>Last Name:</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
            <label className='userForm'>Email:</label>
            <input name="email" value={form.email} onChange={handleChange} required />
            <label className='userForm'>Phone:</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
            <label className='userForm'>DOB:</label>
            <input name="dob" type="date" value={form.dob} onChange={handleChange} required />
            <button type="submit" className="update">Save</button>
            <button type="button" onClick={() => setEditing(false)}>Cancel</button>
          </form>
        ) : (
       <div>
        <p><b>FIRST NAME : </b> {user.firstName}</p>
        <p><b>LAST NAME : </b>{user.lastName}</p>
        <p><b>EMAIL : </b>{user.email}</p>
        <p><b>PHONE NUMBER : </b>{user.phone}</p>
        <p><b>DATE OF BIRTH :</b>{user.dob}</p>
           <div>
        <button  onClick={handleDelete} className='deleteButton' >DELETE</button>
        <button onClick={handleUpdate} className='update'>UPDATE</button>
        <button onClick={handleBack} className='backbutton'>Back</button>
          </div>
    </div>
        )}
      </div>
    </div>
  );
};    

export default UserDetails;


  
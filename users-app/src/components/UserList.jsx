
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './UserList.css';

const UserList = () => {
  const navigate = useNavigate();
  const users = useSelector(state => state.users);


  return (
    <div className='outerContainer'>
      <h2>List of Users</h2>
      <div className='button'>
        <button onClick={() => navigate('/add-user')}>Add User</button>
        
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <td>{idx + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob}</td>
            
            </tr>
             
          ))}
          
        </tbody>
        
      </table>
    </div>
  );
};

export default UserList;
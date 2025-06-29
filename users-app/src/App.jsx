import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
// import UpdateUser from './components/UpdateUser';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user/:id" element={<UserDetails />} /> 
        {/* <Route path="/update-user/:id" element={<UpdateUser />} />   */}
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;


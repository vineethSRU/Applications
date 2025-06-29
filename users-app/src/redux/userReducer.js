import { ADD_USER, DELETE_USER } from './userActions';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };
    case DELETE_USER:
      const filteredUsers = state.users.filter(u => String(u.id) !== String(action.payload));
      localStorage.setItem('users', JSON.stringify(filteredUsers));
      return { ...state, users: filteredUsers };

    case 'UPDATE_USER':
       const updatedUserList = state.users.map(user => 
            user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUserList));
        return { ...state, users: updatedUserList };
         

    default:
      return state;
  }
}
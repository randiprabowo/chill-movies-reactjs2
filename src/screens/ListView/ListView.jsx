import { useSelector, useDispatch } from 'react-redux';
import { addItem, editItem, deleteItem } from '../ListView/actions';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListView.css';

const ListView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.data || []);
  const [newUser , setNewUser ] = useState({ username: '', password: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://6760edc46be7889dc35f3604.mockapi.io/api/v2/dataUser ');
        console.log(response.data); // Debugging
        dispatch(addItem(response.data));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUsers();
  }, [dispatch]);

  console.log(users); // Debugging

  const handleAddUser  = async () => {
    if (newUser .username && newUser .password) {
      try {
        const response = await axios.post('https://6760edc46be7889dc35f3604.mockapi.io/api/v2/dataUser ', newUser );
        dispatch(addItem(response.data));
        setNewUser ({ username: '', password: '' });
      } catch (error) {
        console.error('Error adding user:', error);
      }
    } else {
      console.error('Username and password cannot be empty');
    }
  };

  const handleEditUser  = async (index) => {
    const userToEdit = users[index];
    setNewUser ({ username: userToEdit.username, password: userToEdit.password });
    setEditIndex(index);
  };

  const handleUpdateUser  = async () => {
    if (editIndex !== null) {
      try {
        const response = await axios.put(`https://6760edc46be7889dc35f3604.mockapi.io/api/v2/dataUser /${users[editIndex].id}`, newUser );
        dispatch(editItem({ index: editIndex, user: response.data }));
        setNewUser ({ username: '', password: '' });
        setEditIndex(null);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  const handleDeleteUser  = async (index) => {
    try {
      await axios.delete(`https://6760edc46be7889dc35f3604.mockapi.io/api/v2/dataUser /${users[index].id}`);
      dispatch(deleteItem(index));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="list-view">
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Username"
        value={newUser .username}
        onChange={(e) => setNewUser ({ ...newUser , username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser .password}
        onChange={(e) => setNewUser ({ ...newUser , password: e.target.value })}
      />
      <button onClick={editIndex !== null ? handleUpdateUser  : handleAddUser }>
        {editIndex !== null ? 'Update User' : 'Add User'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEditUser (index)}>Edit</button>
                <button onClick={() => handleDeleteUser (index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
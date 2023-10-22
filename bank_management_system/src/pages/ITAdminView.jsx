import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import mainFig from '../assets/Employee.png'

function ITAdminView() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [users, setUsers] = useState([]);
  
  const saveUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/itAdmin/create-user', user);
      if (response.status === 201) {
        const newUser = response.data;
        setUsers([...users, newUser]);
        setUser({
          name: '',
          email: '',
          username: '',
          password: '',
        });
      } else {
        console.error('User creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateUser = async (userId, updateData) => {
    try {
      const response = await axios.put(`http://localhost:4000/itAdmin/update-user/${userId}`, updateData);
      if (response.status === 200) {
        const updatedUser = response.data;
        const updatedUsers = users.map((u) => (u._id === userId ? updatedUser : u));
        setUsers(updatedUsers);
      } else {
        console.error('User update failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/itAdmin/delete-user/${userId}`);
      if (response.status === 200) {
        const updatedUsers = users.filter((u) => u._id !== userId);
        setUsers(updatedUsers);
      } else {
        console.error('User deletion failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Fetch all users from the server when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/itAdmin/get-all-users');
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5 col-6">
      <Navbar/>
      <div>
      <figure class="figure">
  <img src={mainFig} class="figure-img img-fluid rounded" alt="..."/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <button type="button" className="btn btn-success" onClick={saveUser}>
          Save
        </button>
      </div>

      <div className="mb-3">
        <table className="table table-hover">
          <thead className="table">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.username}</td>
                <td>
                  {/* <button className="btn btn-secondary" onClick={() => updateUser(u._id, { 
                username: u.username,
                password:u.password,
                name:u.name,
                email:u.email
                   })}>Update</button> */}
                  <button className="btn btn-danger" onClick={() => deleteUser(u._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ITAdminView;

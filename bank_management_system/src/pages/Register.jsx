import React, { useState } from 'react';
import { Navbar } from '../components/Navbar'


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = async () => {
    try {
      const response = await fetch('/public/register', { // Ensure this URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, username, password }),
      });

      if (response.status === 201) {
        // Registration successful, redirect to login page
        history.push('/login');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
        <Navbar/>
        <h1>Register</h1>
        <form>
            <div class="mb-3">
            <label for="User Name" class="form-label">Name</label>
            <input type="text" class="form-control"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div class="mb-3">
                <label for="User Email" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div class="mb-3">
                <label for="Username" class="form-label">Username</label>
                <input type="text" class="form-control" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div class="mb-3">
                <label for="User Password" class="form-label">Password</label>
                <input type="password" class="form-control"  placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Did you entered Correct Details</label>
            </div>

  

            <button type="submit" class="btn btn-primary" onClick={handleRegister}>Register</button>
        </form>
    </div>
  );
}



export default Register;

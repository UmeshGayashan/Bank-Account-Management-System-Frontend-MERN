import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
//import {useSnackbar} from 'notistack';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAdminSuccessAlert, setShowAdminSuccessAlert] = useState(false); // State for success alert
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //const {enqueueSnackbar} = useSnackbar();
  

  const handleLogin = async () => {
    if(username == "Admin" && password == "Admin"){
    // Show the success alert
    setShowAdminSuccessAlert(true);

    // You can also redirect after a delay if needed
    setTimeout(() => {
    window.location.href = "http://localhost:5173/AdminView";}, 2000); // Redirect after 2 seconds
    return;

}    try {
      const response = await fetch('http://localhost:4000/public/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Login successful, handle token and redirect to a protected page
        const data = await response.json();

        // Store the token and handle user authentication
        // For example, you can use localStorage or a state management library like Redux.
        console.log('Logged in with token:', data.token);
        // Redirect to a protected page
        // history.push('/dashboard');


        setShowSuccessAlert(true);

    // You can also redirect after a delay if needed
    setTimeout(() => {
    window.location.href = "http://localhost:5173/AccountManagement";}, 1100);
      } else {
        // Handle login error
        console.error('Login failed');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);}, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
        <Navbar/>
    
    <div class='container'>
    
      <h1 className='container'>Login</h1>
      {/* Admin Success Alert */}
      {showAdminSuccessAlert && (
          <div className="alert alert-success" role="alert">
            Login as Admin successful! Redirecting...
          </div>
        )}

        {/* Success Alert */}
      {showSuccessAlert && (
          <div className="alert alert-primary" role="alert">
            Login successful! Redirecting...
          </div>
        )}

        {/* Failure Alert */}
      {showAlert && (
          <div className="alert alert-danger" role="alert">
            Invalid Details
          </div>
        )}
      <div class="mb-3">
      <label for="Username" class="form-label">Username</label>
      <input type="text" class="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
      <label for="Password" class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <br>
      </br>
      <div className='container'>
      <button type="submit" class="btn btn-success" onClick={handleLogin}>Login</button>
      <br>
      </br>
      <p></p>
      <a type="button" class="btn btn-warning" href="http://localhost:5173/register">Register</a>
      </div>
    </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from 'react';
import { AccountNavBar } from '../components/AccountNavBar';

function AccountManagement() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [initBalance, setInitBalance] = useState(0);
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  // Function to create an account
  const createAccount = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/create-acc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, initBalance }),
      });
      
      if (response.status === 201) {
        const data = await response.json();
        
        setAccountNo(data.accountNo);
        //Alert
        setShowSuccessAlert(true);
        setTimeout(() => {
        setShowSuccessAlert(false);}, 2000);
      } else {
        console.error('Account creation failed');
        //Alert
        setShowFailureAlert(true);
        setTimeout(() => {
        setShowFailureAlert(false);}, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      //Alert
      setShowFailureAlert(true);
      setTimeout(() => {
      setShowFailureAlert(false);}, 2000);
    }
  };
  

  // Function to retrieve account information
  // 

  return (
    <div>
      <h1 className='container'>Create Account</h1>
      {/* Success Alert */}
      {showSuccessAlert && (
          <div className="alert alert-primary" role="alert">
            Account Created Successfully
          </div>
        )}

        {/* Failure Alert */}
      {showFailureAlert && (
          <div className="alert alert-danger" role="alert">
            Account creation failed
          </div>
        )}
      <div className='container'>
        <AccountNavBar />
        <h3>Create Account</h3>
        <div className="mb-3">
          <label htmlFor="AccountOwnerName" className="form-label">Bank Account Holder's Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="AccountOwnerEmail" className="form-label">Bank Account Holder's Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="AccountOwnerInitialBalance" className="form-label">Initial Balance</label>
          <input
            type="number"
            className="form-control"
            placeholder="Initial Balance"
            value={initBalance}
            onChange={(e) => setInitBalance(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-lg" onClick={createAccount}>Create Account</button>
      </div>
      
      {accountNo && (
        <div className='container'>
          <h3>Account Details</h3>
          <p>Account Number: {accountNo}</p>
          {/* <button onClick={getAccountInfo}>Get Account Info</button> */}
          {accountInfo && (
            <div>
              <h4>Account Details</h4>
              <p>Name: {accountInfo.holderName}</p>
              <p>Email: {accountInfo.holderEmail}</p>
              <p>Balance: {accountInfo.balance}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AccountManagement;

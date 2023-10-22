import React, { useState } from 'react';
import { AccountNavBar } from '../components/AccountNavBar';

function AccountInfo() {
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  // Function to retrieve account information
  const getAccountInfo = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/acc-info/${accountNo}`); // Use the correct API route
      if (response.status === 200) {
        const data = await response.json();
        setAccountInfo(data);
      } else {
        console.error('Account information retrieval failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to delete an account
  const deleteAccount = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/delete-acc/${accountNo}`, {
        method: 'DELETE',
      }); // Use the correct API route

      if (response.status === 200) {
        // Account deletion successful, clear account info
        setAccountInfo(null);
        setAccountNo(''); // Clear the account number input
        //Alert
        setShowSuccessAlert(true);
        setTimeout(() => {
        setShowSuccessAlert(false);}, 2000);
      } else {
        console.error('Account deletion failed');
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

  return (
    <div className='container'>
        {/* Success Alert */}
      {showSuccessAlert && (
          <div className="alert alert-primary" role="alert">
            Account Deleted Successfully
          </div>
        )}

        {/* Failure Alert */}
      {showFailureAlert && (
          <div className="alert alert-danger" role="alert">
            Account deletion failed
          </div>
        )}
<h1>Account Info</h1>
        <AccountNavBar/>
      <h1 className='container'>Account Details and Delete Account</h1>
      <div className='container'>
        
        <div className="msb-3">
          <label htmlFor="AccountNumber" className="form-label">Bank Account Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>
        <button className="btn btn-success btn-lg" onClick={getAccountInfo}>Get Account Info</button>
        <br />
        <br />
        <br />
        {/* <button className="btn btn-danger btn-lg" onClick={deleteAccount}>Delete Account</button> */}
      </div>

      {accountInfo && (
        <div className='container'>
            
          <h3>Account Information</h3>
          <p>Account Number: {accountNo}</p>
          <button className="btn btn-danger btn-lg" onClick={deleteAccount}>Delete Account</button>
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

export default AccountInfo;

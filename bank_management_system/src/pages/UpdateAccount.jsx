import React, { useState, useEffect } from 'react';
import { AccountNavBar } from '../components/AccountNavBar';

function UpdateAccount() {
  const [accountNo, setAccountNo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [initBalance, setInitBalance] = useState(0);
  const [accountInfo, setAccountInfo] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  // Function to update account information
  const updateAccount = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/update-acc/${accountNo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ holderName:name, holderEmail:email, balance: initBalance }),
      });

      if (response.status === 200) {
        const data = await response.json();
        //Alert
        setShowSuccessAlert(true);
        setTimeout(() => {
        setShowSuccessAlert(false);}, 2000);

        setAccountInfo(data);
      } else {
        console.error('Account update failed');
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
  const getAccountInfo = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/acc-info/${accountNo}`);
      if (response.status === 200) {
        const data = await response.json();
        setAccountInfo(data);
        console.log(data)
      } else {
        console.error('Account information retrieval failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (accountNo) {
      getAccountInfo();
    }
  }, [accountNo]);

  return (
    <div>
      <h1 className='container'>Update Account</h1>
      {/* Success Alert */}
      {showSuccessAlert && (
          <div className="alert alert-primary" role="alert">
            Account Updated Successfully
          </div>
        )}

        {/* Failure Alert */}
      {showFailureAlert && (
          <div className="alert alert-danger" role="alert">
            Account Updating failed
          </div>
        )}
      <div className='container'>
        <AccountNavBar />
        <h3>Update Account</h3>
        <div className="mb-3">
          <label htmlFor="AccountNumber" className="form-label">Bank Account Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>
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
        <button className="btn btn-success btn-lg" onClick={updateAccount}>Update Account</button>
      </div>

      {accountInfo && (
        <div className='container'>
          <h3 class="text-primary">Updated Account Information</h3>
          <h4 class="text-success-emphasis">Account Details</h4>
          <p >Account Number: {accountInfo.accountNo}</p>
          <p>Name: {accountInfo.holderName}</p>
          <p>Email: {accountInfo.holderEmail}</p>
          <p>Balance: {accountInfo.balance}</p>
        </div>
      )}
    </div>
  );
}

export default UpdateAccount;

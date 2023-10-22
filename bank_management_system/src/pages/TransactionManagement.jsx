import React, { useState, useEffect } from 'react';
import { AccountNavBar } from '../components/AccountNavBar';

function TransactionManagement() {
  const [accountNo, setAccountNo] = useState('');
  const [amount, setAmount] = useState(0);
  const [receiverAccountNo, setReceiverAccountNo] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Function to retrieve transactions for an account
  const getTransactions = async () => {
    try {
      const response = await fetch(`http://localhost:4000/transaction/get/${accountNo}`);
      if (response.status === 200) {
        const data = await response.json();
        setTransactions(data);
      } else {
        console.error('Error while fetching transactions');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to perform a transaction (deposit, withdraw, or transfer)
  const performTransaction = async (type) => {
    try {
      const response = await fetch(`http://localhost:4000/transaction/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, accountNo, receiverAccountNo }),
      });

      if (response.status === 200) {
        // Transaction successful, update transaction history
        getTransactions();
      } else {
        console.error(`${type} failed`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [accountNo]);

  return (
    <div>
      <h2 className='container'>Transaction Management</h2>
      <div className='container'>
        <AccountNavBar />
        <h3>Account Details</h3>
        <input
          type="number"
          placeholder="Account Number"
          className="form-control"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />

      </div>
      
      <div className='container'>
        <h3>Deposit</h3>
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        
        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={() => performTransaction('deposit')}
        >
          Deposit
        </button>
      </div>
      <div className='container'>
        <h3>Withdraw</h3>
        <input
          type="number"
          placeholder="Amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-warning"
          onClick={() => performTransaction('withdraw')}
        >
          Withdraw
        </button>
      </div>
      <div className='container'>
        <h3 class="text-center">Transfer</h3>
        <input
          type="text"
          placeholder="Receiver Account Number"
          className="form-control"
          value={receiverAccountNo}
          onChange={(e) => setReceiverAccountNo(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          placeholder="Amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-primary"
          onClick={() => performTransaction('transfer')}
        >
          Transfer
        </button>
        <br>
        </br>
        <button type="submit" className="btn btn-info" onClick={getTransactions}>
          Get Transactions
        </button>
        
        {transactions.length > 0 && (
        <div className="mb-3">
	<h3 class="text-center">Transaction History</h3>
        <table className="table table-hover">
          <thead className="table">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.transType}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.dateTime.date}</td>
                <td>{transaction.dateTime.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      </div>
      
      
      
      
    </div>
  );
}

export default TransactionManagement;

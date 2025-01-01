import React from 'react';
import './WalletBalance.css';

function WalletBalance({ balance, setBalance }) {
  const addIncome = () => {
    const income = parseFloat(prompt('Enter income amount:'));
    if (!isNaN(income) && income > 0) {
      setBalance(balance + income);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <div className="wallet-balance card">
      <h2>Wallet Balance: ₹{balance}</h2>
      <button onClick={addIncome} className="add-income-button">+ Add Income</button>
    </div>
  );
}

export default WalletBalance;
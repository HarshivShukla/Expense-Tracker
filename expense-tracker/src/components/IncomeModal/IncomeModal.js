import React, { useState } from 'react';
import './IncomeModal.css';

function IncomeModal({ closeModal, addIncome }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date) {
      alert('Please fill out all fields.');
      return;
    }
    const income = {
      amount: parseFloat(amount),
      date,
    };
    addIncome(income);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Income</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="modal-actions">
            <button type="submit" className="modal-add-income-button">Add Income</button>
            <button type="button" className="modal-cancel-button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IncomeModal;
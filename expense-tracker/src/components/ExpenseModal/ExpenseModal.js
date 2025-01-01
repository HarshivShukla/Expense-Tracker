import React, { useState } from 'react';
import './ExpenseModal.css';

function ExpenseModal({ closeModal, addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      alert('Please fill out all fields.');
      return;
    }
    const expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    addExpense(expense);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Expenses</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="modal-actions">
            <button type="submit" className="modal-add-expense-button">Add Expense</button>
            <button type="button" className="modal-cancel-button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseModal;
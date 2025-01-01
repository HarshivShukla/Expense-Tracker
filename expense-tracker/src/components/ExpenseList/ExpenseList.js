import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Recent Transactions</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title} - ₹{expense.amount} ({expense.category})</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
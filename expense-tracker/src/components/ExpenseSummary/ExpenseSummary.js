import React from 'react';
import './ExpenseSummary.css';

function ExpenseSummary({ expenses }) {
  const categories = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div className="expense-summary">
      <h2>Top Expenses</h2>
      <ul>
        {Object.entries(categories).map(([category, amount]) => (
          <li key={category}>
            {category}: ₹{amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseSummary;
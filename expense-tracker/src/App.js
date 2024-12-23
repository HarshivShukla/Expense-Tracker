import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WalletBalance from './components/WalletBalance';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    if (expense.amount > walletBalance) {
      alert('Insufficient wallet balance!');
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    const deletedExpense = expenses.find(expense => expense.id === id);
    setExpenses(updatedExpenses);
    setWalletBalance(walletBalance + (deletedExpense?.amount || 0));
  };

  return (
    <div className="app-container">
      <Navbar />
      <WalletBalance balance={walletBalance} setBalance={setWalletBalance} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
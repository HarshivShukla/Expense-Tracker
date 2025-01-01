import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import WalletBalance from './components/WalletBalance/WalletBalance';
import ExpenseModal from './components/ExpenseModal/ExpenseModal'
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary/ExpenseSummary';
import ExpenseChart from './components/ExpenseChart/ExpenseChart';
import IncomeModal from './components/IncomeModal/IncomeModal';
import './App.css';

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);

  const addExpense = (expense) => {
    if (expense.amount > walletBalance) {
      alert('Insufficient wallet balance!');
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
    setIsExpenseModalOpen(false);
  };

  const addIncome = (income) => {
    setWalletBalance(walletBalance + income.amount);
    setIsIncomeModalOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard">
        <div className="wallet-card">
          <h2>Wallet Balance: ₹{walletBalance}</h2>
          <button className="add-income-button" onClick={() => setIsIncomeModalOpen(true)}>+ Add Income</button>
        </div>
        <div className="expense-card">
          <h2>Expenses: ₹{expenses.reduce((acc, curr) => acc + curr.amount, 0)}</h2>
          <button className="add-expense-button" onClick={() => setIsExpenseModalOpen(true)}>+ Add Expense</button>
        </div>
        <div className="chart-card">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
      <div className="transactions-summary">
        <div className="transactions-list">
          <ExpenseList expenses={expenses} deleteExpense={(id) => {
            const updatedExpenses = expenses.filter(expense => expense.id !== id);
            const deletedExpense = expenses.find(expense => expense.id === id);
            setExpenses(updatedExpenses);
            setWalletBalance(walletBalance + (deletedExpense?.amount || 0));
          }} />
        </div>
        <div className="top-expenses">
          <ExpenseSummary expenses={expenses} />
        </div>
      </div>
      {isExpenseModalOpen && <ExpenseModal closeModal={() => setIsExpenseModalOpen(false)} addExpense={addExpense} />}
      {isIncomeModalOpen && <IncomeModal closeModal={() => setIsIncomeModalOpen(false)} addIncome={addIncome} />}
    </div>
  );
}

export default App;
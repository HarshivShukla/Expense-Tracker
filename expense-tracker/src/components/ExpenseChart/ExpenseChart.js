import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import './ExpenseChart.css';

function ExpenseChart({ expenses }) {
  const categories = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const data = Object.entries(categories).map(([name, value]) => ({ name, value }));
  const COLORS = ['#FF8042', '#0088FE', '#FFBB28', '#00C49F'];

  return (
    <div className="expense-chart">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={(entry) => `${entry.name}: ₹${entry.value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Boys', income: 750, expense: 2400 },
  { month: 'Girls', income: 250, expense: 1398 },
  { month: 'Parents', income: 2000, expense: 3600 },
  { month: 'Teachers', income: 400, expense: 2000 },

  
];

function IncomeExpenseChart() {
  return (
    <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
      <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={3} />
      <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export default IncomeExpenseChart;

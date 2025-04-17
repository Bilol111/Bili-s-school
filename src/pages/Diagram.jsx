import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Boys', value: 75, color: '#8CCFFF' },
  { name: 'Girls', value: 25, color: '#F9D9A9' },

];

function StudentsChart() {
  return (
    <div className="p-4 rounded-2xl shadow-xl bg-gray-50" style={{ width: '250px',height:"400px" }}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-sm">Students</h2>
        <button>...</button>
      </div>

      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="flex justify-around mt-2">
        {data.map((entry, index) => (
          <div key={index} className="text-center">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <p className="font-bold text-sm">{entry.value}%</p>
            <p className="text-gray-500 text-xs">{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsChart;

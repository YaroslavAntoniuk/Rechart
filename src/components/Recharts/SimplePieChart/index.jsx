import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { rechartsData } from '../../../utils/constants';
import '../styles.css';

const SimplePieChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Pie Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="bounceRate"
            cx="20%"
            cy="50%"
            innerRadius={130}
            outerRadius={150}
            fill="#82ca9d"
            label
          />

          <Pie
            data={data}
            dataKey="avgDuration"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="users"
            cx="50%"
            cy="50%"
            innerRadius={130}
            outerRadius={150}
            fill="#82ca9d"
            label
          />

          <Pie
            data={data}
            dataKey="sessions"
            cx="80%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimplePieChart;

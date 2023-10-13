import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../styles.css';
import { rechartsData } from '../../../utils/constants';

const SimpleBarChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Bar Chart</h2>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={800} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="abb" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#8884d8" />
            <Bar dataKey="sessions" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;

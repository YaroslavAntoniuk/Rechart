import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../styles.css';
import { rechartsData } from '../../../utils/constants';

const SimpleLineChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Line Chart</h2>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="abb" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <Line type="monotone" dataKey="sessions" stroke="#82ca9d" />
            <Line type="monotone" dataKey="bounceRate" stroke="#db2ed8" />
            <Line type="monotone" dataKey="avgDuration" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleLineChart;

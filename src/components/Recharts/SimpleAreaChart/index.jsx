import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../styles.css';
import { rechartsData } from '../../../utils/constants';

const SimpleAreaChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Area Chart</h2>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="abb" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleAreaChart;

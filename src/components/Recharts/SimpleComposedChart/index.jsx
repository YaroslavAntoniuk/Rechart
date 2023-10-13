import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { rechartsData } from '../../../utils/constants';
import '../styles.css';

const SimpleComposedChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Composed Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="abb" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="sessions"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="users" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="avgDuration" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleComposedChart;

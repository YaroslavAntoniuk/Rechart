import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { rechartsData } from '../../../utils/constants';
import '../styles.css';

const SimpleRadarChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Radar Chart</h2>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="abb" />
            <Tooltip />
            <Radar
              name="Sessions"
              dataKey="sessions"
              stroke="#100b73"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Users"
              dataKey="users"
              stroke="#c2b00c"
              fill="#fcee6d"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleRadarChart;

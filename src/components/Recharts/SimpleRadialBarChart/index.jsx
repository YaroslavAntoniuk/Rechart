import React from 'react';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { rechartsData } from '../../../utils/constants';
import '../styles.css';

const SimpleRadialBarChart = ({ data = rechartsData }) => {
  return (
    <div className="container">
      <h2>Radial Bar Chart</h2>
      <div className="wrapper">
        <ResponsiveContainer width="100%" height={500}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <Tooltip />
            <RadialBar
              name="Sessions"
              minAngle={15}
              background
              clockWise
              dataKey="sessions"
            />
            <Legend
              iconSize={10}
              formatter={(val, entry) => {
                return `${val} - ${entry.payload.sessions}`;
              }}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{
                top: '50%',
                right: 0,
                transform: 'translate(0, -50%)',
                lineHeight: '24px',
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleRadialBarChart;

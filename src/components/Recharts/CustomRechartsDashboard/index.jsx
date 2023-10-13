import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { radialBarData } from '../../../utils/constants';

const CustomRechartsDashboard = ({ data }) => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="url(#colorGradient)" />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#27685F" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#81A089" stopOpacity={0} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="abb" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                activeDot={{ r: 6 }}
                strokeWidth={3}
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                dataKey="sessions"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                stroke="#27685F"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              cx="70%"
              cy="50%"
              innerRadius="50%"
              outerRadius="80%"
              barSize={20}
              data={radialBarData}
              startAngle={90}
              endAngle={-270}
            >
              <Legend
                content={(props) => {
                  return (
                    <ul>
                      {props.payload.map(({ payload }, index) => (
                        <li
                          key={`item-${index}`}
                          style={{
                            marginBottom: 12,
                            textAlign: 'start',
                            color: payload.fill,
                            fontWeight: 'bold',
                          }}
                        >{`${payload.name} - ${payload.users} users`}</li>
                      ))}
                    </ul>
                  );
                }}
                layout="vertical"
                verticalAlign="middle"
                align="left"
              />
              <RadialBar
                name="Users"
                minAngle={15}
                background
                clockWise
                dataKey="users"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={radialBarData}
                dataKey="users"
                isAnimationActive={true}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                fill="#82ca9d"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={radialBarData[index % radialBarData.length].fill}
                  />
                ))}
              </Pie>
              <Legend
                formatter={(_, { payload }) =>
                  `${payload.name} - ${payload.users} users`
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CustomRechartsDashboard;

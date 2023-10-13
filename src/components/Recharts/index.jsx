import React, { useState } from 'react';
import SimpleAreaChart from './SimpleAreaChart';
import SimpleBarChart from './SimpleBarChart';
import SimpleLineChart from './SimpleLineChart';
import './styles.css';
import {
  rechartsChartType,
  rechartsDashboardData,
  rechartsData,
} from '../../utils/constants';
import SimpleComposedChart from './SimpleComposedChart';
import SimplePieChart from './SimplePieChart';
import SimpleRadarChart from './SimpleRadarChart';
import SimpleRadialBarChart from './SimpleRadialBarChart';
import CustomRechartsDashboard from './CustomRechartsDashboard';
import About from './About';

const SelectedChart = {
  [rechartsChartType.Line]: <SimpleLineChart data={rechartsData} />,
  [rechartsChartType.Area]: <SimpleAreaChart data={rechartsData} />,
  [rechartsChartType.Bar]: <SimpleBarChart data={rechartsData} />,
  [rechartsChartType.Composed]: <SimpleComposedChart data={rechartsData} />,
  [rechartsChartType.Pie]: <SimplePieChart data={rechartsData} />,
  [rechartsChartType.Radar]: <SimpleRadarChart data={rechartsData} />,
  [rechartsChartType.RadialBar]: <SimpleRadialBarChart data={rechartsData} />,
  [rechartsChartType.Dashboard]: (
    <CustomRechartsDashboard data={rechartsDashboardData} />
  ),
  [rechartsChartType.About]: <About />,
};

const Recharts = () => {
  const [chart, setChart] = useState(rechartsChartType.Line);

  const handleChartChange = (chart) => {
    setChart(chart);
  };

  return (
    <div>
      <div>
        {Object.keys(rechartsChartType).map((chartType) => {
          return (
            <button
              key={chartType}
              style={{
                backgroundColor: chart === chartType && '#2F4858',
              }}
              onClick={() => handleChartChange(chartType)}
            >
              {chartType}
            </button>
          );
        })}
      </div>
      <div className="container">{SelectedChart[chart]}</div>
    </div>
  );
};

export default Recharts;

// src/components/dashboard/charts/risk-chart.tsx
import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';

interface ChartData {
  time: string;
  value: number;
}

interface RiskChartProps {
  data: ChartData[];
}

const CustomXAxis: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <>
    {data.map(({ time }, i) => {
      const xPosition = `${(i * 100) / (data.length - 1)}%`;
      return (
        <text
          key={`x-axis-${time}`}
          x={xPosition}
          y="100%"
          textAnchor="middle"
          fill="#888888"
          fontSize={12}
          dy={16}
        >
          {time}
        </text>
      );
    })}
  </>
);

const CustomYAxis: React.FC = () => {
  const values = [0, 25, 50, 75, 100];
  return (
    <>
      {values.map((value) => {
        const yPosition = `${100 - (value * 100) / 100}%`;
        return (
          <React.Fragment key={`y-axis-${value}`}>
            <text
              x="0%"
              y={yPosition}
              textAnchor="end"
              fill="#888888"
              fontSize={12}
              dx={-8}
            >
              {value}%
            </text>
            <ReferenceLine
              y={value}
              stroke="#eee"
              strokeDasharray="3 3"
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const customizedGradient = (
  <defs>
    <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
    </linearGradient>
  </defs>
);

export const RiskChart: React.FC<RiskChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        {customizedGradient}
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false}
          stroke="#eee"
        />
        <CustomYAxis />
        <CustomXAxis data={data} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#riskGradient)"
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
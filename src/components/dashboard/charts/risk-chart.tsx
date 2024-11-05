import { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { CustomTooltip } from './custom-tooltip';

export interface ChartDataPoint {
  time: string;
  value: number;
}

interface RiskChartProps {
  data: ChartDataPoint[];
}

const defaultAxisProps = {
  fontSize: 12,
  stroke: "hsl(var(--muted-foreground))",
  tickLine: false,
  axisLine: false,
} as const;

const RiskChart: FC<RiskChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid 
        stroke="hsl(var(--muted))"
        strokeDasharray="3 3"
        vertical={false}
      />
      <XAxis 
        dataKey="time"
        padding={{ left: 10, right: 10 }}
        fontSize={defaultAxisProps.fontSize}
        stroke={defaultAxisProps.stroke}
        tickLine={defaultAxisProps.tickLine}
        axisLine={defaultAxisProps.axisLine}
      />
      <YAxis
        padding={{ top: 20, bottom: 20 }}
        fontSize={defaultAxisProps.fontSize}
        stroke={defaultAxisProps.stroke}
        tickLine={defaultAxisProps.tickLine}
        axisLine={defaultAxisProps.axisLine}
        tickFormatter={(value: number) => `${value}%`}
      />
      <Tooltip 
        content={<CustomTooltip />}
        cursor={{ stroke: 'hsl(var(--muted))' }}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="hsl(var(--primary))"
        strokeWidth={2}
        dot={false}
        activeDot={{ 
          r: 8, 
          fill: "hsl(var(--primary))",
          strokeWidth: 0 
        }}
        fill="url(#colorValue)"
      />
    </LineChart>
  </ResponsiveContainer>
);

export { RiskChart };
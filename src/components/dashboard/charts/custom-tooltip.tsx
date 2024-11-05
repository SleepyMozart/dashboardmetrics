import { FC } from 'react';
import { TooltipProps } from 'recharts';
import { ChartDataPoint } from './risk-chart';

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{ value: number; payload: ChartDataPoint }>;
}

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload }) => {
  if (!active || !payload?.length) {
    return null;
  }

  const data = payload[0];

  return (
    <div className="bg-background border border-border rounded-lg shadow-lg p-3">
      <p className="text-sm font-medium text-foreground mb-1">
        {`Time: ${data.payload.time}`}
      </p>
      <p className="text-sm text-muted-foreground">
        {`Risk: ${data.value}%`}
      </p>
    </div>
  );
};

export { CustomTooltip };
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RiskChart, ChartDataPoint } from './charts/risk-chart';

interface MetricsChartProps {
  data: number[];
}

const MetricsChart: FC<MetricsChartProps> = ({ data }) => {
  const chartData: ChartDataPoint[] = data.map((value, index) => ({
    time: `${index}h`,
    value,
  }));

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Risk Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <RiskChart data={chartData} />
      </CardContent>
    </Card>
  );
};

export { MetricsChart };
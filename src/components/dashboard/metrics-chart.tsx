// src/components/dashboard/metrics-chart.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RiskChart } from './charts/risk-chart';

interface MetricsChartProps {
  data: number[];
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  // Transform data into the required format
  const chartData = data.map((value, index) => ({
    time: `${index}h`,
    value
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risco de Abandono</CardTitle>
      </CardHeader>
      <CardContent>
        <RiskChart data={chartData} />
      </CardContent>
    </Card>
  );
};
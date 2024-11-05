import { TrendingDown, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchMetrics, getMetrics } from '@/lib/api';
import { cn } from '@/lib/utils';

export function MetricsGrid() {
  const { data: metrics = getMetrics() } = useQuery({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            {metric.trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metric.title.includes('Time') || metric.title.includes('Satisfaction')
                ? metric.value
                : metric.title.includes('Rate')
                ? `${metric.value}%`
                : metric.value.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">{metric.description}</p>
            <div
              className={cn(
                'mt-2 text-sm',
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              )}
            >
              {metric.change > 0 ? '+' : ''}
              {metric.change}%
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
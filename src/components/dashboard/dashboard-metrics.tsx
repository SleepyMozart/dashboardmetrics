import { useQuery } from '@tanstack/react-query';
import { MessageSquare, Clock, BarChart } from 'lucide-react';
import { MetricCard } from './metric-card';
import { MetricsChart } from './metrics-chart';
import { LoadingMetrics } from './loading-metrics';
import { ErrorAlert } from '@/components/ui/error-alert';

interface Metrics {
  activeConversations: number;
  averageResponseTime: number;
  qualityScore: number;
  historicalData: Array<{
    timestamp: string;
    value: number;
  }>;
}

const mockMetrics: Metrics = {
  activeConversations: 24,
  averageResponseTime: 180,
  qualityScore: 92,
  historicalData: Array.from({ length: 24 }, (_, i) => ({
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    value: 75 + Math.random() * 20,
  })),
};

const metricDefinitions = [
  {
    title: 'Active Conversations',
    key: 'activeConversations' as const,
    icon: MessageSquare,
    formatter: (value: number) => value.toString(),
  },
  {
    title: 'Average Response Time',
    key: 'averageResponseTime' as const,
    icon: Clock,
    formatter: (value: number) => `${Math.round(value / 60)} min`,
  },
  {
    title: 'Quality Score',
    key: 'qualityScore' as const,
    icon: BarChart,
    formatter: (value: number) => `${value}%`,
  },
] as const;

export function DashboardMetrics() {
  const { data: metrics, isLoading, error } = useQuery<Metrics>({
    queryKey: ['metrics'],
    queryFn: async () => mockMetrics,
    staleTime: 30000,
    refetchInterval: 30000,
  });

  if (error) {
    return <ErrorAlert message="Failed to load metrics" />;
  }

  if (isLoading || !metrics) {
    return <LoadingMetrics />;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {metricDefinitions.map((def) => (
          <MetricCard
            key={def.key}
            title={def.title}
            value={metrics[def.key]}
            icon={def.icon}
            formatter={def.formatter}
          />
        ))}
      </div>
      <MetricsChart
        data={metrics.historicalData}
        title="Performance Trend"
      />
    </div>
  );
}
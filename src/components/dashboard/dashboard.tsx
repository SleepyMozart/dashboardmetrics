import { useQuery } from '@tanstack/react-query';
import { fetchMetrics } from '@/lib/api';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MetricsGrid } from './metrics-grid';
import { MetricsChart } from './metrics-chart';
import { AttentionList } from './attention-list';

export function Dashboard() {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Alert variant="destructive">
          <AlertDescription>
            Erro ao carregar métricas. Por favor, tente novamente mais tarde.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard WhatsApp</h1>
      
      <MetricsGrid
        activeConversations={metrics?.activeConversations ?? 0}
        averageResponseTime={metrics?.averageResponseTime ?? 0}
        qualityScore={metrics?.qualityScore ?? 0}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MetricsChart data={metrics?.abandonmentRisk ?? []} />
        <AttentionList cases={metrics?.attentionCases ?? []} />
      </div>
    </main>
  );
}
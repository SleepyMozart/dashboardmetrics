import { MetricsCard } from './metrics-card';

interface MetricsGridProps {
  activeConversations: number;
  averageResponseTime: number;
  qualityScore: number;
}

export function MetricsGrid({
  activeConversations,
  averageResponseTime,
  qualityScore
}: MetricsGridProps) {
  const responseTimeInMinutes = Math.round(averageResponseTime / 60);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricsCard
        title="Conversas Ativas"
        value={activeConversations}
      />
      <MetricsCard
        title="Tempo Médio de Resposta"
        value={responseTimeInMinutes}
        unit="min"
      />
      <MetricsCard
        title="Score de Qualidade"
        value={qualityScore}
        unit="%"
      />
    </div>
  );
}
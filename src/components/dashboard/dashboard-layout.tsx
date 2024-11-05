import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardMetrics } from '@/components/dashboard/dashboard-metrics';
import { ConversationList } from '@/components/conversation-list';
import { AttentionCases } from '@/components/attention-cases';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <DashboardMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <ConversationList />
          <AttentionCases />
        </div>
      </main>
    </div>
  );
}
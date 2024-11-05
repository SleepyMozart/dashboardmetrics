import { Alert, AlertDescription } from '@/components/ui/alert';

interface AttentionCaseProps {
  id: string;
  customer: string;
  issue: string;
  waitingTime: number;
}

export function AttentionCase({ customer, issue, waitingTime }: AttentionCaseProps) {
  const waitingTimeInMinutes = Math.round(waitingTime / 60);

  return (
    <Alert>
      <AlertDescription>
        <div className="flex justify-between items-center">
          <span className="font-medium">{customer}</span>
          <span className="text-red-500 font-medium">
            {waitingTimeInMinutes} min
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{issue}</p>
      </AlertDescription>
    </Alert>
  );
}
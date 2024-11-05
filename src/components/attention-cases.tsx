import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AttentionCase {
  id: string;
  customer: string;
  issue: string;
  priority: 'high' | 'medium' | 'low';
  waitingTime: number;
}

const mockCases: AttentionCase[] = [
  {
    id: '1',
    customer: 'Alice Johnson',
    issue: 'Payment failed multiple times',
    priority: 'high',
    waitingTime: 45,
  },
  {
    id: '2',
    customer: 'Bob Wilson',
    issue: 'Account access issues',
    priority: 'medium',
    waitingTime: 30,
  },
];

export function AttentionCases() {
  const getPriorityColor = (priority: AttentionCase['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          Attention Required
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {mockCases.map((case_) => (
              <Alert key={case_.id} variant="destructive">
                <AlertDescription>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{case_.customer}</span>
                      <Badge
                        variant="secondary"
                        className={`${getPriorityColor(case_.priority)} text-white`}
                      >
                        {case_.priority}
                      </Badge>
                    </div>
                    <p className="text-sm">{case_.issue}</p>
                    <p className="text-sm text-gray-400">
                      Waiting time: {case_.waitingTime} minutes
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
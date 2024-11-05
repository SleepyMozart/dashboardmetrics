import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricsCardProps {
  title: string;
  value: number | string;
  unit?: string;
}

export function MetricsCard({ title, value, unit }: MetricsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">
          {value}{unit && <span className="text-2xl ml-1">{unit}</span>}
        </p>
      </CardContent>
    </Card>
  );
}
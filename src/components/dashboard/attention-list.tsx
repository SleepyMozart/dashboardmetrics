import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AttentionCase } from './attention-case';

interface AttentionCase {
  id: string;
  customer: string;
  issue: string;
  waitingTime: number;
}

interface AttentionListProps {
  cases: AttentionCase[];
}

export function AttentionList({ cases }: AttentionListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Casos que Precisam de Atenção</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cases.length > 0 ? (
            cases.map((item) => (
              <AttentionCase key={item.id} {...item} />
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">
              Nenhum caso precisando de atenção
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
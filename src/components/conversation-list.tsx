import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface Conversation {
  id: string;
  customer: {
    name: string;
    avatar?: string;
  };
  lastMessage: string;
  timestamp: string;
  status: 'active' | 'pending' | 'resolved';
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    customer: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    lastMessage: 'I need help with my order',
    timestamp: new Date().toISOString(),
    status: 'active',
  },
  {
    id: '2',
    customer: {
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    },
    lastMessage: 'When will my package arrive?',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    status: 'pending',
  },
];

export function ConversationList() {
  const { data: conversations = mockConversations, isLoading } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => mockConversations,
  });

  const getStatusColor = (status: Conversation['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'resolved':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-start space-x-4 rounded-lg border p-4"
              >
                <Avatar>
                  <AvatarImage src={conversation.customer.avatar} />
                  <AvatarFallback>
                    {conversation.customer.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{conversation.customer.name}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(new Date(conversation.timestamp), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{conversation.lastMessage}</p>
                  <Badge
                    variant="secondary"
                    className={`${getStatusColor(conversation.status)} text-white`}
                  >
                    {conversation.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
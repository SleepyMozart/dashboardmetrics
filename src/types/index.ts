export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  avatar: string;
  status: 'online' | 'offline' | 'typing';
}

export interface Metric {
  id: string;
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  description: string;
}

export interface AttentionCase {
  id: string;
  customer: string;
  issue: string;
  priority: 'high' | 'medium' | 'low';
  timestamp: string;
  status: 'pending' | 'in-progress' | 'resolved';
}
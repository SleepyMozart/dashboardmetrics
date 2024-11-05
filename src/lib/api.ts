import axios from 'axios';
import { AttentionCase, Conversation, Metric } from '@/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
});

export const fetchMetrics = async (): Promise<Metric[]> => {
  const { data } = await api.get('/metrics');
  return data;
};

export const fetchConversations = async (): Promise<Conversation[]> => {
  const { data } = await api.get('/conversations');
  return data;
};

export const fetchAttentionCases = async (): Promise<AttentionCase[]> => {
  const { data } = await api.get('/attention-cases');
  return data;
};

// Fallback data for development
export const getMetrics = (): Metric[] => [
  {
    id: '1',
    title: 'Total Conversations',
    value: 2847,
    change: 12.5,
    trend: 'up',
    description: 'Total active conversations this month',
  },
  {
    id: '2',
    title: 'Response Time',
    value: 2.4,
    change: -8.2,
    trend: 'down',
    description: 'Average response time in minutes',
  },
  {
    id: '3',
    title: 'Resolution Rate',
    value: 94.2,
    change: 5.1,
    trend: 'up',
    description: 'Percentage of resolved conversations',
  },
  {
    id: '4',
    title: 'Customer Satisfaction',
    value: 4.8,
    change: 2.3,
    trend: 'up',
    description: 'Average rating out of 5',
  },
];

export const getConversations = (): Conversation[] => [
  {
    id: '1',
    name: 'Alice Johnson',
    lastMessage: 'Thank you for your help!',
    timestamp: '2 min ago',
    unreadCount: 0,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    status: 'online',
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'When will my order arrive?',
    timestamp: '15 min ago',
    unreadCount: 2,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    status: 'typing',
  },
  {
    id: '3',
    name: 'Carol White',
    lastMessage: 'I need to change my delivery address',
    timestamp: '1 hour ago',
    unreadCount: 1,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    status: 'offline',
  },
];

export const getAttentionCases = (): AttentionCase[] => [
  {
    id: '1',
    customer: 'David Brown',
    issue: 'Payment failed multiple times',
    priority: 'high',
    timestamp: '10 min ago',
    status: 'pending',
  },
  {
    id: '2',
    customer: 'Emma Davis',
    issue: 'Product received damaged',
    priority: 'high',
    timestamp: '30 min ago',
    status: 'in-progress',
  },
  {
    id: '3',
    customer: 'Frank Miller',
    issue: 'Refund request pending',
    priority: 'medium',
    timestamp: '1 hour ago',
    status: 'pending',
  },
];
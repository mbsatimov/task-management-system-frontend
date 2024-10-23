import type { Chat } from '@/types/models/chat';
import type { Message } from '@/types/models/message';

export const messages: Message[] = [
  {
    id: 1212,
    isRead: true,
    createdAt: '2023-12-12T00:00:00Z',
    text: 'Whats up?',
    image: 'https://i.pravatar.cc/300?u=a',
    user: {
      id: 1,
      email: 'a@a.com',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://i.pravatar.cc/300?u=a',
    },
  },
  {
    id: 1,
    isRead: true,
    createdAt: '2023-12-12T00:00:00Z',
    text: 'This is a message',
    image: null,
    user: {
      id: 1,
      email: 'a@a.com',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://i.pravatar.cc/300?u=a',
    },
  },
  {
    id: 2,
    isRead: false,
    createdAt: '2023-12-13T00:00:00Z',
    text: 'This is a message, lorem ipsum dolor sit amet',
    image: null,
    user: {
      id: 2,
      email: 'jskdfjdk@a.com',
      firstName: 'Sarah',
      lastName: 'Lee',
      avatar: 'https://i.pravatar.cc/300?u=a',
    },
  },
  {
    id: 3,
    isRead: false,
    createdAt: '2023-12-12T00:00:00Z',
    text: 'This is a message',
    image: null,
    user: {
      id: 1,
      email: 'a@a.com',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://i.pravatar.cc/300?u=a',
    },
  },
];

export const chats: Chat[] = [
  {
    id: 1,
    user: {
      id: 1,
      email: 'a@a.com',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://i.pravatar.cc/300?u=a',
    },
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2023-12-12',
    lastMessage: {
      id: 2,
      isRead: false,
      createdAt: '2020-01-01T00:00:00Z',
      text: 'This is a message, lorem ipsum dolor sit amet',
      image: null,
      user: {
        id: 1,
        email: 'a@a.com',
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://i.pravatar.cc/300?u=a',
      },
    },
    unreadedMessagesCount: 3,
  },
  {
    id: 2,
    user: {
      id: 1,
      email: 'a@a.com',
      firstName: 'Sarah',
      lastName: 'Lee',
      avatar: null,
    },
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2023-12-12',
    lastMessage: {
      id: 2,
      isRead: false,
      createdAt: '2020-01-01T00:00:00Z',
      text: 'This is a message',
      image: null,
      user: {
        id: 1,
        email: 'a@a.com',
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://i.pravatar.cc/300?u=a',
      },
    },
    unreadedMessagesCount: 0,
  },
];

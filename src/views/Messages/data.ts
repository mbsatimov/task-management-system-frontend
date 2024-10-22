import type { Chat } from '@/types/models/chat';

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
      firstName: 'John',
      lastName: 'Doe',
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

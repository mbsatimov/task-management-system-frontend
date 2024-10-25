import type { Message } from './message';
import type { User } from './user';

export interface Chat {
  id: number;
  updatedAt: string;
  createdAt: string;
  user: User;
  lastMessage: Message;
  unreadedMessagesCount: number;
}

export type ChatResponse = Chat;
export type ChatsResponse = Chat[];

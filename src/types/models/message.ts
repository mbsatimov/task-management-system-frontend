import type { User } from './user';

export interface Message {
  id: number;
  isRead: boolean;
  createdAt: string;
  text: string | null;
  image: string | null;
  chatId: number;
  user: User;
}

export type MessageRequest = {
  text: string | null;
  image: string | null;
};

export type MessageResponse = Message;
export type MessagesResponse = Message[];

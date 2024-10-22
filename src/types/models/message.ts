import type { User } from './user';

export interface Message {
  id: number;
  isRead: boolean;
  createdAt: string;
  text: string | null;
  image: string | null;
  user: User;
}

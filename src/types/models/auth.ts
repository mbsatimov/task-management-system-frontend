import type { User } from './user';

export interface Auth {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = Auth;

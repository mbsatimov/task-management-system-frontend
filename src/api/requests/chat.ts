import { $api } from '../instance';
import type { ChatResponse, ChatsResponse } from '@/types/models/chat';

export const ChatService = {
  getChats: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<ChatsResponse>('chats', requestConfig?.config),
  }),

  getChat: async ({ id, config }: AxiosRequestConfig & { id: number }) => ({
    errors: [],
    success: true,
    data: await $api.get<ChatResponse>(`chats/${id}`, config),
  }),
};

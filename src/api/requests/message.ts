import type { MessagesResponse, MessageRequest } from '@/types/models/message';
import { $api } from '../instance';

export const MessageService = {
  getMessages: async ({
    chatId,
    config,
  }: AxiosRequestConfig & { chatId: number }) => ({
    errors: [],
    success: true,
    data: await $api.get<MessagesResponse>(
      `/messages?chatId=${chatId}`,
      config
    ),
  }),

  postMessage: async ({
    chatId,
    data,
    config,
  }: AxiosRequestConfig<MessageRequest> & { chatId: number }) =>
    $api.post(
      `/messages?chatId=${chatId}`,
      {
        id: Math.random(),
        chatId,
        image: data.image,
        text: data.text,
        createdAt: new Date().toISOString(),
        user: {
          id: 1,
          email: 'a@a.com',
          firstName: 'John',
          lastName: 'Doe',
          avatar: 'https://i.pravatar.cc/300?u=a',
        },
        isRead: false,
      },
      config
    ),
};

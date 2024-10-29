import { ChatService } from '@/api/requests/chat';
import type { Chat } from '@/types/models/chat';
import { defineStore } from 'pinia';

type State = {
  chats: {
    data: Chat[];
    isLoading: boolean;
    errors: string[] | null;
  };
  currentChat: {
    data: Chat | null;
    isLoading: boolean;
    errors: string[] | null;
  };
};

export const useChatStore = defineStore({
  id: 'chat',
  state: (): State => ({
    chats: {
      data: [],
      isLoading: false,
      errors: null,
    },
    currentChat: {
      data: null,
      isLoading: false,
      errors: null,
    },
  }),
  getters: {},
  actions: {
    async getChats(requestConfig?: AxiosRequestConfig) {
      this.chats.isLoading = true;
      await ChatService.getChats({ config: requestConfig?.config })
        .then(({ data }) => {
          setTimeout(() => {
            this.chats.data = data.data;
            this.chats.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.chats.errors = error.response.data.errors;
          this.chats.isLoading = false;
        });
    },

    async getChat(id: number, requestConfig?: AxiosRequestConfig) {
      this.currentChat.isLoading = true;
      await ChatService.getChat({ id, config: requestConfig?.config })
        .then(({ data }) => {
          setTimeout(() => {
            this.currentChat.data = data.data;
            this.currentChat.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.currentChat.errors = error.response.data.errors;
          this.currentChat.isLoading = false;
        });
    },
  },
});

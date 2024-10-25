import { ChatService } from '@/api/requests/chat';
import type { Chat } from '@/types/models/chat';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoadingChats: boolean;
  isLoadingCurrentChat: boolean;
  chats: Chat[];
  pagination: Pagination | null;
  currentChat: Chat | null;
  validationErrors: string[] | null;
};

export const useChatStore = defineStore({
  id: 'chat',
  state: (): State => ({
    isSubmitting: false,
    isLoadingChats: false,
    isLoadingCurrentChat: false,
    chats: [],
    pagination: null,
    currentChat: null,
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getChats(requestConfig?: AxiosRequestConfig) {
      this.isLoadingChats = true;
      await ChatService.getChats(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.chats = data.data;
            this.isLoadingChats = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoadingChats = false;
        });
    },

    async getChat(id: number, requestConfig?: AxiosRequestConfig) {
      this.isLoadingCurrentChat = true;
      await ChatService.getChat({ id, config: requestConfig?.config })
        .then(({ data }) => {
          setTimeout(() => {
            this.currentChat = data.data;
            this.isLoadingCurrentChat = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoadingCurrentChat = false;
        });
    },
  },
});

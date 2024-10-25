import { MessageService } from '@/api/requests/message';
import type { Message, MessageRequest } from '@/types/models/message';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  messages: Message[];
  pagination: Pagination | null;
  currentMessage: Message | null;
  todayMessage: Message | null;
  validationErrors: string[] | null;
};

export const useMessageStore = defineStore({
  id: 'message',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    messages: [],
    pagination: null,
    currentMessage: null,
    todayMessage: null,
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getMessages(chatId: number, requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await MessageService.getMessages({
        chatId,
        config: requestConfig?.config,
      })
        .then(({ data }) => {
          setTimeout(() => {
            this.messages = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },

    async postMessage(
      chatId: number,
      message: MessageRequest,
      requestConfig?: AxiosRequestConfig
    ) {
      this.isSubmitting = true;
      this.validationErrors = null;
      await MessageService.postMessage({
        chatId,
        data: message,
        config: requestConfig?.config,
      })
        .then(() => {
          this.isSubmitting = false;
          this.currentMessage = null;
        })
        .catch(error => {
          this.isSubmitting = false;
          this.validationErrors = error.response.data.errors;
        });
    },
  },
});

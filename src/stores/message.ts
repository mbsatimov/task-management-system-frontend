import { MessageService } from '@/api/requests/message';
import type { Message, MessageRequest } from '@/types/models/message';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  messages: {
    data: Message[];
    isLoading: boolean;
    errors: string[] | null;
  };
  validationErrors: string[] | null;
};

export const useMessageStore = defineStore({
  id: 'message',
  state: (): State => ({
    isSubmitting: false,
    messages: {
      data: [],
      isLoading: false,
      errors: null,
    },
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getMessages(chatId: number, requestConfig?: AxiosRequestConfig) {
      this.messages.isLoading = true;
      await MessageService.getMessages({
        chatId,
        config: requestConfig?.config,
      })
        .then(({ data }) => {
          setTimeout(() => {
            this.messages.data = data.data;
            this.messages.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.messages.errors = error.response.data.errors;
          this.messages.isLoading = false;
        });
    },

    async postMessage(
      chatId: number,
      message: MessageRequest,
      requestConfig?: AxiosRequestConfig
    ) {
      this.isSubmitting = true;
      await MessageService.postMessage({
        chatId,
        data: message,
        config: requestConfig?.config,
      })
        .then(() => {
          this.isSubmitting = false;
        })
        .catch(error => {
          this.isSubmitting = false;
          this.validationErrors = error.response.data.errors;
        });
    },
  },
});

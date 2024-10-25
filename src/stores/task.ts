import { TaskService } from '@/api/requests/task';
import type { Task } from '@/types/models/task';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  tasks: Task[];
  pagination: Pagination | null;
  currentTask: Task | null;
  todayTask: Task | null;
  validationErrors: string[] | null;
};

export const useTaskStore = defineStore({
  id: 'task',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    tasks: [],
    pagination: null,
    currentTask: null,
    todayTask: null,
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getTasks(requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await TaskService.getTasks(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.tasks = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },

    async getTask(id: number, requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await TaskService.getTask({ id, config: requestConfig?.config })
        .then(({ data }) => {
          setTimeout(() => {
            this.currentTask = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },

    async getTodayTask(requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await TaskService.getTodayTask(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.todayTask = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },
  },
});

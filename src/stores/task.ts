import { TaskService } from '@/api/requests/task';
import type { Task } from '@/types/models/task';
import { defineStore } from 'pinia';

type State = {
  upcomingTasks: {
    data: Task[];
    isLoading: boolean;
    errors: string[] | null;
  };
  timeLimitedTasks: {
    data: Task[];
    isLoading: boolean;
    errors: string[] | null;
  };
  newTasks: {
    data: Task[];
    isLoading: boolean;
    errors: string[] | null;
  };
  currentTask: {
    data: Task | null;
    isLoading: boolean;
    errors: string[] | null;
  };
  todayTask: {
    data: Task | null;
    isLoading: boolean;
    errors: string[] | null;
  };
};

export const useTaskStore = defineStore({
  id: 'task',
  state: (): State => ({
    upcomingTasks: {
      data: [],
      isLoading: false,
      errors: null,
    },
    timeLimitedTasks: {
      data: [],
      isLoading: false,
      errors: null,
    },
    newTasks: {
      data: [],
      isLoading: false,
      errors: null,
    },
    currentTask: {
      data: null,
      isLoading: false,
      errors: null,
    },
    todayTask: {
      data: null,
      isLoading: false,
      errors: null,
    },
  }),
  getters: {},
  actions: {
    async getUpcomingTasks(requestConfig?: AxiosRequestConfig) {
      this.upcomingTasks.isLoading = true;
      await TaskService.getUpcomingTasks(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.upcomingTasks.data = data.data;
            this.upcomingTasks.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.upcomingTasks.errors = error.response.data.errors;
          this.upcomingTasks.isLoading = false;
        });
    },

    async getTimeLimitedTasks(requestConfig?: AxiosRequestConfig) {
      this.timeLimitedTasks.isLoading = true;
      await TaskService.getTimeLimitedTasks(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.timeLimitedTasks.data = data.data;
            this.timeLimitedTasks.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.timeLimitedTasks.errors = error.response.data.errors;
          this.timeLimitedTasks.isLoading = false;
        });
    },

    async getNewTasks(requestConfig?: AxiosRequestConfig) {
      this.newTasks.isLoading = true;
      await TaskService.getNewTasks(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.newTasks.data = data.data;
            this.newTasks.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.newTasks.errors = error.response.data.errors;
          this.newTasks.isLoading = false;
        });
    },

    async getTask(id: number, requestConfig?: AxiosRequestConfig) {
      this.currentTask.isLoading = true;
      await TaskService.getTask({ id, config: requestConfig?.config })
        .then(({ data }) => {
          this.currentTask.data = data.data;
          this.currentTask.isLoading = false;
        })
        .catch(error => {
          this.currentTask.errors = error.response.data.errors;
          this.currentTask.isLoading = false;
        });
    },

    async getTodayTask(requestConfig?: AxiosRequestConfig) {
      this.todayTask.isLoading = true;
      await TaskService.getTodayTask(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.todayTask.data = data.data;
            this.todayTask.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.todayTask.errors = error.response.data.errors;
          this.todayTask.isLoading = false;
        });
    },
  },
});

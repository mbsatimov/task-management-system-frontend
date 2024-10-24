import { TaskService } from '@/api/requests/task';
import type { Task, TaskRequest } from '@/types/models/task';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  tasks: Task[] | null;
  pagination: Pagination | null;
  currentTask: Nullable<Task>;
  validationErrors: string[] | null;
};

export const useTaskStore = defineStore({
  id: 'task',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    tasks: null,
    pagination: null,
    currentTask: {
      id: null,
      title: null,
      progress: null,
      image: null,
      details: null,
      duration: null,
      createdAt: null,
      direction: null,
      assignedTo: null,
      description: null,
    },
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getTasks(params?: AxiosRequestConfig) {
      this.isLoading = true;
      await TaskService.getTasks(params)
        .then(({ data }) => {
          setTimeout(() => {
            this.tasks = data.data;
            this.pagination = data.meta;
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

    async postTask(task: TaskRequest, requestConfig?: AxiosRequestConfig) {
      this.isSubmitting = true;
      this.validationErrors = null;
      await TaskService.postTask({
        data: task,
        config: requestConfig?.config,
      })
        .then(() => {
          this.isSubmitting = false;
          this.currentTask = {
            id: null,
            title: null,
            progress: null,
            image: null,
            details: null,
            duration: null,
            createdAt: null,
            direction: null,
            assignedTo: null,
            description: null,
          };
        })
        .catch(error => {
          this.isSubmitting = false;
          this.validationErrors = error.response.data.errors;
        });
    },

    async deleteTask(id: number) {
      this.isLoading = true;
      this.validationErrors = null;
      await TaskService.deleteTask({ id })
        .then(() => {
          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
          this.validationErrors = error.response.data.errors;
        });
    },
  },
});

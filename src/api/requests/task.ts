import type { TaskResponse, TasksResponse } from '@/types/models/task';
import { $api } from '../instance';

export const TaskService = {
  getUpcomingTasks: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<TasksResponse>('tasks', requestConfig?.config),
  }),

  getTimeLimitedTasks: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<TasksResponse>('tasks', requestConfig?.config),
  }),

  getNewTasks: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<TasksResponse>('tasks', requestConfig?.config),
  }),

  getTask: async ({ id, config }: AxiosRequestConfig & { id: number }) => ({
    errors: [],
    success: true,
    data: await $api.get<TaskResponse>(`tasks/${id}`, config),
  }),

  getTodayTask: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<TaskResponse>(`tasksToday`, requestConfig?.config),
  }),
};

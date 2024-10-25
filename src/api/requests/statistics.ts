import type {
  StatisticsActivity,
  StatisticsRunningTask,
} from '@/types/models/statistics';
import { $api } from '../instance';

const runningTask: StatisticsRunningTask = {
  completed: 32,
  total: 123,
};

const activities: StatisticsActivity[] = [
  {
    day: 'S',
    completedTasks: 1,
  },
  {
    day: 'M',
    completedTasks: 2,
  },
  {
    day: 'T',
    completedTasks: 3,
  },
  {
    day: 'W',
    completedTasks: 2,
  },
  {
    day: 'T',
    completedTasks: 2,
  },
  {
    day: 'F',
    completedTasks: 1,
  },
  {
    day: 'S',
    completedTasks: 1,
  },
];

export const StatisticsService = {
  getRunningTask: async (requestConfig?: AxiosRequestConfig) => ({
    data: {
      errors: [],
      success: true,
      data: runningTask,
    },
  }),

  getActivities: async (requestConfig?: AxiosRequestConfig) => ({
    data: {
      errors: [],
      success: true,
      data: activities,
    },
  }),
};

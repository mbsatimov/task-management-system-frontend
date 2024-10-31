import type {
  StatisticsActivity,
  StatisticsRunningTask,
} from '@/types/models/statistics';
import { $api } from '../instance';

export const StatisticsService = {
  getRunningTask: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<StatisticsRunningTask>(
      'statisticsRunningTask',
      requestConfig?.config
    ),
  }),

  getActivities: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<StatisticsActivity[]>(
      'statisticsActivities',
      requestConfig?.config
    ),
  }),
};

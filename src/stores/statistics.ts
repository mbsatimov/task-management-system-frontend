import { defineStore } from 'pinia';
import { StatisticsService } from '@/api/requests/statistics';
import type {
  StatisticsActivity,
  StatisticsRunningTask,
} from '@/types/models/statistics';

type State = {
  runningTask: {
    data: StatisticsRunningTask | null;
    isLoading: boolean;
    errors: string[] | null;
  };
  activities: {
    data: StatisticsActivity[];
    isLoading: boolean;
    errors: string[] | null;
  };
};

export const useStatisticsStore = defineStore({
  id: 'statistics',
  state: (): State => ({
    runningTask: {
      data: null,
      isLoading: false,
      errors: null,
    },
    activities: {
      data: [],
      isLoading: false,
      errors: null,
    },
  }),
  getters: {},
  actions: {
    async getRunningTask(requestConfig?: AxiosRequestConfig) {
      this.runningTask.isLoading = true;
      await StatisticsService.getRunningTask(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.runningTask.data = data.data;
            this.runningTask.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.runningTask.errors = error.response.data.errors;
          this.runningTask.isLoading = false;
        });
    },

    async getActivities(requestConfig?: AxiosRequestConfig) {
      this.activities.isLoading = true;
      await StatisticsService.getActivities(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.activities.data = data.data;
            this.activities.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.activities.errors = error.response.data.errors;
          this.activities.isLoading = false;
        });
    },
  },
});

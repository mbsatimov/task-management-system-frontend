import { defineStore } from 'pinia';
import { StatisticsService } from '@/api/requests/statistics';
import type {
  StatisticsActivity,
  StatisticsRunningTask,
} from '@/types/models/statistics';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  runningTask: StatisticsRunningTask | null;
  activities: StatisticsActivity[];
  validationErrors: string[] | null;
};

export const useStatisticsStore = defineStore({
  id: 'statistics',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    runningTask: null,
    activities: [],
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getRunningTask(requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await StatisticsService.getRunningTask(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.runningTask = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },

    async getActivities(requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await StatisticsService.getActivities(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.activities = data.data;
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

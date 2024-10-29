import { MentorService } from '@/api/requests/mentor';
import type { Mentor } from '@/types/models/mentor';
import { defineStore } from 'pinia';

type State = {
  monthlyMentors: {
    data: Mentor[];
    isLoading: boolean;
    errors: string[] | null;
  };
  resentMentors: {
    data: Mentor[];
    isLoading: boolean;
    errors: string[] | null;
  };
  mentors: {
    data: Mentor[];
    isLoading: boolean;
    errors: string[] | null;
  };
  currentMentor: {
    data: Mentor | null;
    isLoading: boolean;
    errors: string[] | null;
  };
};

export const useMentorStore = defineStore({
  id: 'mentor',
  state: (): State => ({
    monthlyMentors: {
      data: [],
      isLoading: false,
      errors: null,
    },
    resentMentors: {
      data: [],
      isLoading: false,
      errors: null,
    },
    mentors: {
      data: [],
      isLoading: false,
      errors: null,
    },
    currentMentor: {
      data: null,
      isLoading: false,
      errors: null,
    },
  }),
  getters: {},
  actions: {
    async getMonthlyMentors(requestConfig?: AxiosRequestConfig) {
      this.monthlyMentors.isLoading = true;
      await MentorService.getMonthlyMentors(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.monthlyMentors.data = data.data;
            this.monthlyMentors.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.monthlyMentors.errors = error.response.data.errors;
          this.monthlyMentors.isLoading = false;
        });
    },
    async getResentMentors(requestConfig?: AxiosRequestConfig) {
      this.resentMentors.isLoading = true;
      await MentorService.getResentMentors(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.resentMentors.data = data.data;
            this.resentMentors.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.resentMentors.errors = error.response.data.errors;
          this.resentMentors.isLoading = false;
        });
    },
    async getMentors(requestConfig?: AxiosRequestConfig) {
      this.mentors.isLoading = true;
      await MentorService.getMentors(requestConfig)
        .then(({ data }) => {
          setTimeout(() => {
            this.mentors.data = data.data;
            this.mentors.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.mentors.errors = error.response.data.errors;
          this.mentors.isLoading = false;
        });
    },

    async getMentor(id: number, requestConfig?: AxiosRequestConfig) {
      this.mentors.isLoading = true;
      await MentorService.getMentor({ id, config: requestConfig?.config })
        .then(({ data }) => {
          this.currentMentor.data = data.data;
          this.currentMentor.isLoading = false;
        })
        .catch(error => {
          this.currentMentor.errors = error.response.data.errors;
          this.currentMentor.isLoading = false;
        });
    },
  },
});

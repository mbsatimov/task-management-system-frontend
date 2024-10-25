import { MentorService } from '@/api/requests/mentor';
import type { Mentor } from '@/types/models/mentor';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  mentors: Mentor[];
  pagination: Pagination | null;
  currentMentor: Mentor | null;
  validationErrors: string[] | null;
};

export const useMentorStore = defineStore({
  id: 'mentor',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    mentors: [],
    pagination: null,
    currentMentor: null,
    validationErrors: null,
  }),
  getters: {},
  actions: {
    async getMentors(params?: AxiosRequestConfig) {
      this.isLoading = true;
      await MentorService.getMentors(params)
        .then(({ data }) => {
          setTimeout(() => {
            this.mentors = data.data;
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },

    async getMentor(id: number, requestConfig?: AxiosRequestConfig) {
      this.isLoading = true;
      await MentorService.getMentor({ id, config: requestConfig?.config })
        .then(({ data }) => {
          this.currentMentor = data.data;
          this.isLoading = false;
        })
        .catch(error => {
          this.validationErrors = error.response.data.errors;
          this.isLoading = false;
        });
    },
  },
});

import { MentorService } from '@/api/requests/mentor';
import type { Mentor, MentorRequest } from '@/types/models/mentor';
import type { Pagination } from '@/types/models/pagination';
import { defineStore } from 'pinia';

type State = {
  isSubmitting: boolean;
  isLoading: boolean;
  mentors: Mentor[] | null;
  pagination: Pagination | null;
  currentMentor: Nullable<Mentor>;
  validationErrors: string[] | null;
};

export const useMentorStore = defineStore({
  id: 'mentor',
  state: (): State => ({
    isSubmitting: false,
    isLoading: false,
    mentors: null,
    pagination: null,
    currentMentor: {
      id: null,
      about: null,
      tasks: null,
      avatar: null,
      rating: null,
      reviews: null,
      jobTitle: null,
      lastName: null,
      firstName: null,
    },
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
            this.pagination = data.meta;
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

    async postMentor(
      mentor: MentorRequest,
      requestConfig?: AxiosRequestConfig
    ) {
      this.isSubmitting = true;
      this.validationErrors = null;
      await MentorService.postMentor({
        data: mentor,
        config: requestConfig?.config,
      })
        .then(() => {
          this.isSubmitting = false;
          this.currentMentor = {
            id: null,
            lastName: null,
            firstName: null,
            about: null,
            tasks: null,
            avatar: null,
            rating: null,
            reviews: null,
            jobTitle: null,
          };
        })
        .catch(error => {
          this.isSubmitting = false;
          this.validationErrors = error.response.data.errors;
        });
    },

    async deleteMentor(id: number) {
      this.isLoading = true;
      this.validationErrors = null;
      await MentorService.deleteMentor({ id })
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
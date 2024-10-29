import type { MentorResponse, MentorsResponse } from '@/types/models/mentor';
import { $api } from '../instance';

export const MentorService = {
  getMonthlyMentors: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<MentorsResponse>('mentors', requestConfig?.config),
  }),
  getResentMentors: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<MentorsResponse>('mentors', requestConfig?.config),
  }),
  getMentors: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<MentorsResponse>('mentors', requestConfig?.config),
  }),
  getMentor: async ({ id, config }: AxiosRequestConfig & { id: number }) => ({
    errors: [],
    success: true,
    data: await $api.get<MentorResponse>(`mentors/${id}`, config),
  }),
};

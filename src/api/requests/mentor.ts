import type { Mentor, MentorRequest } from '@/types/models/mentor';
import { $api } from '../instance';

let mentors: Mentor[] = [
  {
    id: 1,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reviews: 10,
    jobTitle: 'Programmer',
  },
  {
    id: 2,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reviews: 10,
    jobTitle: 'Programmer',
  },
  {
    id: 3,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reviews: 10,
    jobTitle: 'Programmer',
  },
  {
    id: 4,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reviews: 10,
    jobTitle: 'Programmer',
  },
  {
    id: 5,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reviews: 10,
    jobTitle: 'Programmer',
  },
];

export const MentorService = {
  getMentors: async (requestConfig?: AxiosRequestConfig) => ({
    data: {
      errors: [],
      success: true,
      data: mentors,
      meta: {
        total: mentors.length,
      },
    },
  }),
  getMentor: async ({ id, config }: AxiosRequestConfig & { id: number }) => ({
    data: {
      errors: [],
      success: true,
      data: mentors[0],
    },
  }),

  postMentor: async ({ data, config }: AxiosRequestConfig<MentorRequest>) => {
    mentors.push({
      id: mentors[mentors.length - 1]?.id + 1 || 1,
      ...data,
    });
  },
  putMentor: async ({
    id,
    data,
    config,
  }: AxiosRequestConfig<MentorRequest> & { id: number }) => {
    mentors = mentors.map(mentor =>
      mentor.id === id ? { id, ...data } : mentor
    );
  },
  deleteMentor: async ({ id, config }: AxiosRequestConfig & { id: number }) => {
    mentors = mentors.filter(mentor => mentor.id !== id);
  },
};

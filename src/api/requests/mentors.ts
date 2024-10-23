import type { Mentor } from '@/types/models/mentor';
import { $api } from '../instance';

const data = [
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
];

export const getMentors = async (): Promise<ApiResponse<Mentor[]>> => ({
  message: '',
  success: true,
  data,
});

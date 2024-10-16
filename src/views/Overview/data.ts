import type { Mentor } from '@/types/models/mentor';
import type { Task } from '@/types/models/task';

export const mentorsData: Mentor[] = [
  {
    id: 1,
    firstName: 'Dennis',
    lastName: 'Nzioki',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    tasks: 10,
    rating: 4,
    about: '',
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
    about: '',
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
    about: '',
    reviews: 10,
    jobTitle: 'Programmer',
  },
];

export const tasksData: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Task 1 description',
    progress: 70,
    createdAt: '2023-01-01',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    duration: '1 week',
    direction: 'Frontend',
    assignedTo: [
      {
        id: 1,
        avatar:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        firstName: 'Dennis',
        lastName: 'Nzioki',
      },
      {
        id: 2,
        avatar:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        firstName: 'Dennis',
        lastName: 'Nzioki',
      },
      {
        id: 3,
        avatar:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        firstName: 'Dennis',
        lastName: 'Nzioki',
      },
    ],
  },
];

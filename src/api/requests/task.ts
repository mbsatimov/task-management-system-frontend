import type { Task, TaskRequest } from '@/types/models/task';
import { $api } from '../instance';

let tasks: Task[] = [
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
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
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
  {
    id: 2,
    title: 'Task 1',
    description: 'Task 1 description',
    progress: 70,
    createdAt: '2023-01-01',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    duration: '1 week',
    direction: 'Frontend',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
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
  {
    id: 3,
    title: 'Task 2',
    description: 'Task 2 description',
    progress: 30,
    createdAt: '2023-01-01',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    duration: '1 week',
    direction: 'Backend',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
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
  {
    id: 4,
    title: 'Task 2',
    description: 'Task 2 description',
    progress: 30,
    createdAt: '2023-01-01',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    duration: '1 week',
    direction: 'Backend',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
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

export const TaskService = {
  getTasks: async (requestConfig?: AxiosRequestConfig) => ({
    data: {
      errors: [],
      success: true,
      data: tasks,
      meta: {
        total: tasks.length,
      },
    },
  }),
  getTask: async ({ id, config }: AxiosRequestConfig & { id: number }) => ({
    data: {
      errors: [],
      success: true,
      data: tasks.find(task => task.id === id) as Task,
    },
  }),

  postTask: async ({ data, config }: AxiosRequestConfig<TaskRequest>) => {
    tasks.push({
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      ...data,
    });
  },
  putTask: async ({
    id,
    data,
    config,
  }: AxiosRequestConfig<TaskRequest> & { id: number }) => {
    tasks = tasks.map(task => (task.id === id ? { id, ...data } : task));
  },
  deleteTask: async ({ id, config }: AxiosRequestConfig & { id: number }) => {
    tasks = tasks.filter(task => task.id !== id);
  },
};

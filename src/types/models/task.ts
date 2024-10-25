import type { Student } from './student';

export interface Task {
  id: number;
  image: string;
  video: string;
  title: string;
  direction: string;
  description?: string;
  progress: number;
  createdAt: string;
  duration: string;
  assignedTo: Student[];
  details: string[];
}

export type TaskRequest = Omit<Task, 'id'>;

export type TaskResponse = Task;
export type TasksResponse = Task[];

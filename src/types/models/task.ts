import type { Student } from './student';

export interface Task {
  id: number;
  image: string;
  title: string;
  direction: string;
  description?: string;
  progress: number;
  createdAt: string;
  duration: string;
  assignedTo: Student[];
}

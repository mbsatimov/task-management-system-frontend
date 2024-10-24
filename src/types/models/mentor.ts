export interface Mentor {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  tasks: number;
  reviews: number;
  rating: number;
  about: string;
}

export type MentorRequest = Omit<Mentor, 'id'>;

export type MentorResponse = Mentor;
export type MentorsResponse = Mentor[];

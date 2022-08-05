import { Member } from './member';

export interface Task {
  id: number;
  title: string;
  details: string;
  teamMembers: Member[];
}

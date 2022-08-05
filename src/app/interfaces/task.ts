import { Member } from './member';

export interface Task {
  title: string;
  details: string;
  teamMembers: Member[];
}

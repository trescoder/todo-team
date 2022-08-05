import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private Tasks: Task[] = [];
  private Members: Member[] = [];
  private id: number = 0;

  constructor() {}

  addNewMember(name: string) {
    if (
      !this.Members.some((m) => m.name.toLowerCase() === name.toLowerCase())
    ) {
      this.Members.push({ id: this.id, name });
      this.id++;
      console.log(this.Members);

      return { msg: 'New Member Added', ok: true };
    }
    return { msg: 'This Member Already exists', ok: false };
  }
}

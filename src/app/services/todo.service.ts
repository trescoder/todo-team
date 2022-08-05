import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private Tasks: Task[] = [];

  constructor() {}
}

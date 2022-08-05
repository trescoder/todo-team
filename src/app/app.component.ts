import { Component, DoCheck } from '@angular/core';
import { Task } from './interfaces/task';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  showTaskForm = true;
  tasks: Task[] = [];
  title = 'todo-team';

  constructor(private todoService: TodoService) {}

  ngDoCheck(): void {
    this.tasks = this.todoService.getTasks();
  }
}

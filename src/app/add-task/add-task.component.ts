import { Component, DoCheck, OnInit } from '@angular/core';
import { Member } from '../interfaces/member';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, DoCheck {
  public members: Member[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.members = this.todoService.getMembers();
  }

  ngDoCheck(): void {
    this.members = this.todoService.getMembers();
  }

  addTask(form: any) {}
}

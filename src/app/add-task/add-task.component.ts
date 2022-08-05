import { Component, DoCheck, OnInit } from '@angular/core';
import { Member } from '../interfaces/member';
import { Task } from '../interfaces/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, DoCheck {
  public members: Member[] = [];
  public tasks: Task[] = [];
  private taskMembers: Member[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.members = this.todoService.getMembers();
    this.members = this.todoService.getMembers();
  }

  addTask(form: any) {
    const { taskTitle, taskDetails } = form.controls;
    if (taskTitle.errors === null && taskDetails.errors === null) {
      if (this.members.length !== 0) {
        const task: Task = {
          teamMembers: this.members,
          details: taskDetails.value.trim(),
          title: taskTitle.value.trim(),
        };
        this.todoService.addNewTask(task);
      } else {
        //todo: alert to select at least one member
      }
    } else {
      //todo: alert about the errors
    }
  }

  selectedMember(member: Member) {
    if (!this.taskMembers.some((m) => m.id == member.id)) {
      this.taskMembers.push(member);
    } else {
      const index = this.taskMembers.findIndex((m) => m.id === member.id);
      this.taskMembers.splice(index, 1);
    }
    console.log(this.taskMembers);
  }
}

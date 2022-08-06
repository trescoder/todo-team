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
  private taskMembers: Member[] = [];
  private selectedMembers: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.members = this.todoService.getMembers();
    console.log('on init');
  }

  ngDoCheck(): void {
    console.log('on check');
  }

  addTask(form: any) {
    const { taskTitle, taskDetails } = form.controls;
    if (taskTitle.errors === null && taskDetails.errors === null) {
      if (this.taskMembers.length !== 0) {
        const task: Task = {
          teamMembers: this.taskMembers,
          details: taskDetails.value.trim(),
          title: taskTitle.value.trim(),
        };
        this.todoService.addNewTask(task);
        this.taskMembers = [];
        this.selectedMembers.forEach((li) => {
          li.classList.remove('active');
        });
        this.selectedMembers = [];
      } else {
        //todo: alert to select at least one member
      }
    } else {
      //todo: alert about the errors
    }
  }

  selectedMember(member: Member, liElement: HTMLElement) {
    liElement.classList.toggle('active');
    if (!this.selectedMembers.some((li) => li === liElement)) {
      this.selectedMembers.push(liElement);
    }

    if (!this.taskMembers.some((m) => m.id == member.id)) {
      this.taskMembers.push(member);
    } else {
      const index = this.taskMembers.findIndex((m) => m.id === member.id);
      this.taskMembers.splice(index, 1);
    }
  }
}

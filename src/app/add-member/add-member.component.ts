import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addMember(member: HTMLInputElement) {
    if (member.value.trim().length >= 2) {
      this.todoService.addNewMember(member.value.trim());
      member.style.border = '2px solid green';
      member.value = '';
      setTimeout(() => {
        member.style.border = 'none';
      }, 500);
    } else {
      alert('Member name is too short');
    }
  }
}

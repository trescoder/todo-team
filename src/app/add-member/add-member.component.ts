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

  addMember(form: any) {
    const { member } = form.controls;

    if (member.errors === null) {
      this.todoService.addNewMember(member.value);
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent implements OnInit {
  @ViewChild('msgInfo') msgInfoElement?: ElementRef<HTMLDivElement>;
  public msg: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addMember(member: HTMLInputElement) {
    this.msgInfoElement?.nativeElement.classList.remove('success');
    this.msgInfoElement?.nativeElement.classList.remove('error');

    if (member.value.trim().length >= 2) {
      let { msg, ok } = this.todoService.addNewMember(member.value.trim());
      this.msg = msg;
      member.value = '';
      if (ok) {
        this.msgInfoElement?.nativeElement.classList.add('success');
        setTimeout(() => {
          this.msg = '';
        }, 1000);
      }
    } else {
      this.msgInfoElement?.nativeElement.classList.add('error');
      this.msg = 'Member name is too short';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text: string;
  constructor(private todoService: TodosService) {
    this.text = '';
  }

  ngOnInit(): void {
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    if (!this.text.trim().length) return;
    this.todoService.addTodo(this.text);
    this.text = '';
    console.log(this.todoService.todos$.getValue());
  }

}

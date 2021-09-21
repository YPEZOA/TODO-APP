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

  changeText(event: any): void {
    this.text = event.target.value.replace(/[^a-zA-Z ]/g, "");
  }

  addTodo(): void {
    if (!this.text.trim().length) return;
    this.todoService.addTodo(this.text);
    this.text = '';
  }

}

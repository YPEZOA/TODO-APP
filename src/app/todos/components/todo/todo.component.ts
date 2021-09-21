import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: TodoInterface;
  @Input() isEditing!: boolean;
  @Output() setEditingIdEvent: EventEmitter<string> = new EventEmitter();

  editingText: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  setTodoInEditMode(): void {
    console.log('setTodo');
    this.setEditingIdEvent.emit(this.todo.id);
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todo.id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo.id);
    console.log('ToggleTodo');
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('change Text');
  }

  changeTodo(): void {
    console.log('changeTodo', this.editingText);
    this.todosService.changeTodo(this.todo.id, this.editingText);
    this.setEditingIdEvent.emit('');
  }

}

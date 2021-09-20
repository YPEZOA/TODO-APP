import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  constructor() { }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16)
    };
    const updateTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updateTodos);
  }

  toggleAll(isCompleted: boolean): void {
    const updateTodos = this.todos$.getValue().map(todo => {
      return {
        ...todo,
        isCompleted
      };
    });
    this.todos$.next(updateTodos);
  }

}

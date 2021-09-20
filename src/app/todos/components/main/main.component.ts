import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass$!: Observable<boolean>;
  isAllTodosSelected$!: Observable<boolean>;

  constructor(private todoService: TodosService) {
    this.isAllTodosSelected$ = this.todoService.todos$.pipe(
      map(todos => todos.every(todo => todo.isCompleted))
    );
    this.noTodoClass$ = this.todoService.todos$.pipe(
      map(todos => todos.length === 0));
    this.visibleTodos$ = combineLatest(
      this.todoService.todos$,
      this.todoService.filter$
    ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
      if (filter === FilterEnum.active) {
        return todos.filter(todo => !todo.isCompleted);
      } else if (filter === FilterEnum.completed) {
        return todos.filter(todo => todo.isCompleted);
      }
      return todos;
    })
    );
  }

  ngOnInit(): void {
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todoService.toggleAll(target.checked);
  }

}

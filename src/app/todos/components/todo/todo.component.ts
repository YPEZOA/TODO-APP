import { Component, Input, OnInit } from '@angular/core';
import {TodoInterface} from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: TodoInterface;

  constructor() { }

  ngOnInit(): void {
  }

}

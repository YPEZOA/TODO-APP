import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }

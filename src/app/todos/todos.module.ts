import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { todosReducer } from './reducers/todos.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forFeature('todosState', todosReducer)
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodolistModule { }

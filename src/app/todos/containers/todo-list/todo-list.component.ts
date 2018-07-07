import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../../models/todos';
import { AddTodo, DeleteTodo, UpdateTodo, CompleteTodo, EditTodo } from '../../actions/todos.actions';
import { selectTodos } from '../../selectors/todos.selector';
import { AppState } from '../../../core/reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Array<Todo>>;
  public newTodo: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select<Array<Todo>>(selectTodos);
  }

  onAddTodo(newTodo) {
    this.store.dispatch(new AddTodo(newTodo));
    this.newTodo = '';
  }

  onCompleteTodo(todo: Todo) {
    this.store.dispatch(new CompleteTodo(todo));
  }

  onRemoveTodo(todo: Todo) {
    this.store.dispatch(new DeleteTodo(todo));
  }

  onEditTodo(todo: Todo) {
    this.store.dispatch(new EditTodo(todo));
  }

  onUpdateTodo(todo: Todo) {
    this.store.dispatch(new UpdateTodo(todo));
  }

}

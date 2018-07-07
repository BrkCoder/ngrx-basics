import { Action } from '@ngrx/store';
import { Todo } from '../models/todos';

export enum TodosActionTypes {
  AddTodo = '[Todos] AddTodo',
  UpdateTodo = '[Todos] UpdateTodo',
  DeleteTodo = '[Todos] DeleteTodo',
  CompleteTodo = '[Todos] CompleteTodo',
  EditTodo = '[Todos] EditTodo'
}


export class AddTodo implements Action {
  readonly type = TodosActionTypes.AddTodo;

  constructor(public payload: string) {
  }
}

export class UpdateTodo implements Action {
  readonly type = TodosActionTypes.UpdateTodo;

  constructor(public payload: Todo) {
  }
}

export class DeleteTodo implements Action {
  readonly type = TodosActionTypes.DeleteTodo;

  constructor(public payload: Todo) {
  }
}

export class CompleteTodo implements Action {
  readonly type = TodosActionTypes.CompleteTodo;

  constructor(public payload: Todo) {
  }
}

export class EditTodo implements Action {
  readonly type = TodosActionTypes.EditTodo;

  constructor(public payload: Todo) {
  }
}

export type TodosActions = AddTodo | UpdateTodo | DeleteTodo | CompleteTodo | EditTodo;

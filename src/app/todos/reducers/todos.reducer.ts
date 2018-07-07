import { Todo } from '../models/todos';
import { TodosActionTypes, TodosActions } from '../actions/todos.actions';

export interface TodosState {
  todos: Array<Todo>;
}

export const initialState: TodosState = {
  todos: []
};

export function todosReducer(state: TodosState = initialState, action: TodosActions): TodosState {
  switch (action.type) {
    case TodosActionTypes.AddTodo: {
      const { todos } = state;
      const newTodo: Todo = {
        id: String(todos.length + 1),
        text: action.payload,
        isCompleted: false,
        isEditabled: false,
        isVisible: true
      };
      return {
        ...state,
        todos: [
          ...state.todos,
          newTodo
        ]
      };
    }
    case TodosActionTypes.DeleteTodo: {
      const { todos } = state;
      const newTodos = todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos: [
          ...newTodos
        ]
      };
    }
    case TodosActionTypes.CompleteTodo: {
      const { todos } = state;
      const newTodos = todos.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return Object.assign({}, todo, {
            isCompleted: !todo.isCompleted
          });
        }
      });
      return {
        ...state,
        todos: [
          ...newTodos
        ]
      };
    }
    case TodosActionTypes.EditTodo: {
      const { todos } = state;
      const newTodos = todos.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return Object.assign({}, todo, {
            isEditabled: true
          });
        }
      });
      return {
        ...state,
        todos: [
          ...newTodos
        ]
      };
    }
    case TodosActionTypes.UpdateTodo: {
      const { todos } = state;
      const newTodos = todos.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return Object.assign({}, todo, {
            isEditabled: false,
            text: action.payload.text
          });
        }
      });
      return {
        ...state,
        todos: [
          ...newTodos
        ]
      };
    }

    default:
      return state;
  }
}

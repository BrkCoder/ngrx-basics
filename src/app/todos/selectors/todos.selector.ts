import { AppState } from '../../core/reducers';

export const selectTodos = (state: AppState) => state.todosState.todos;


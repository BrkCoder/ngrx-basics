import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { TodosState, todosReducer } from '../../todos/reducers/todos.reducer';
import { CounterState, counterReducer } from '../../counter/reducers/counter.reducer';

export interface AppState {
  readonly todosState: TodosState;
  readonly counterState: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  todosState: todosReducer,
  counterState: counterReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];

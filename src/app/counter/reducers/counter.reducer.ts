import { Action } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

export function counterReducer(state = initialState, action: Action): CounterState {
  switch (action.type) {
    case CounterActions.CounterActionTypes.Increment: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case CounterActions.CounterActionTypes.Decrement: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
}

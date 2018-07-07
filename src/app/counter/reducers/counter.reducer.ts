import { CounterActions, CounterActionTypes } from '../actions/counter.actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

export function counterReducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case CounterActionTypes.Decrement: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
}

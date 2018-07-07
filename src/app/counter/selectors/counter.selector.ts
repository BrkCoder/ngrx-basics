import { AppState } from '../../core/reducers';

export const selectCounter = (state: AppState) => state.counterState.counter;

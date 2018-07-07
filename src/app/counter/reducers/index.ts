import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { CounterState, counterReducer } from './counter.reducer';
import { environment } from '../../../environments/environment';

export interface State {
    counterState: CounterState;
}

export const reducers: ActionReducerMap<State> = {
    counterState: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
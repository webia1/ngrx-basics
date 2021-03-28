import { ActionReducerMap } from '@ngrx/store';
import { CounterState } from '../../static/types';
import { countReducer } from './reducers';

export const countReducerMap: ActionReducerMap<CounterState> = {
  count: countReducer,
};

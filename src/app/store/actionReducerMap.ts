import { ActionReducerMap } from '@ngrx/store';
import { State } from '../static/types';
import { countReducer } from './reducers';

export const actionReducerMap: ActionReducerMap<State> = {
  count: countReducer,
};

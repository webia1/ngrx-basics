import {
   ActionReducerMap,
   createAction,
   createReducer,
   on,
} from '@ngrx/store';

import { State } from '../static/types';

export const increment = createAction('[Counter] Increment');

export const countReducer = createReducer(
   0,
   on(increment, (count) => count + 1),
);

export const reducers: ActionReducerMap<State> = {
   count: countReducer,
};

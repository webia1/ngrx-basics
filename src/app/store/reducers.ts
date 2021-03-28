import { createReducer, on } from '@ngrx/store';
import { increment, multiply } from './actions';

export const countReducer = createReducer(
  0,
  on(increment, (count) => count + 1),
  on(multiply, (count, { factor }) => count * factor),
);

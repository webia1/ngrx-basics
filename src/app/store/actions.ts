import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const multiply = createAction(
  '[Counter] Multiply',
  props<{ factor: number }>(),
);

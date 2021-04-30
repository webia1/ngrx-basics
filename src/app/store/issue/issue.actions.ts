import { createAction, props } from '@ngrx/store';
import { Issue } from 'src/app/static/types';

export const submit = createAction(
  '[Issue] Submit',
  props<{ issue: Issue }>(),
);

/*

export declare function props<
  P extends object
>(): ActionCreatorProps<P>;

export interface ActionCreatorProps<T> {
  _as: 'props';
  _p: T;
}

*/

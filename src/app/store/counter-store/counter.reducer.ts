import { createReducer, on } from '@ngrx/store';

import { decrement, increment, set } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action): number => state + action.countX),
  on(decrement, (state, action): number => state - action.countX),
  on(set, (state, action): number => action.countX),
);

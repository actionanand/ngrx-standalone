import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action): number => state + action.countX),
  on(decrement, (state, action): number => state - action.countX),
);

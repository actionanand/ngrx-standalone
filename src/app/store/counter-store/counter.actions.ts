import { createAction, props } from '@ngrx/store';

// export const INCREMENT = '[Counter] Increment';

export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  INITIALIZE = '[Counter] Init',
  SET = '[Counter] Set',
}

export const init = createAction(CounterActionTypes.INITIALIZE);

export const set = createAction(CounterActionTypes.SET, props<{ countX: number }>());

export const increment = createAction(CounterActionTypes.INCREMENT, props<{ countX: number }>());

export const decrement = createAction(CounterActionTypes.DECREMENT, props<{ countX: number }>());

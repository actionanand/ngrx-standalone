import { createAction, props } from '@ngrx/store';

// export const INCREMENT = '[Counter] Increment';

export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
}

export const increment = createAction(CounterActionTypes.INCREMENT, props<{ countX: number }>());

export const decrement = createAction(CounterActionTypes.DECREMENT, props<{ countX: number }>());

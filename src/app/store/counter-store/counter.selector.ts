import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state.model';

export const selectCounter = (state: AppState) => state.counter;

// state will be the o/p of 'selectCounter'
export const selectDouble = createSelector(selectCounter, (state: number) => state * 2);

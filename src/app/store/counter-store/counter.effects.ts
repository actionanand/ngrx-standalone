/* eslint-disable @ngrx/no-typed-global-store */
import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { of, switchMap, tap } from 'rxjs';
// import { withLatestFrom } from 'rxjs';
// import { Effect } from '@ngrx/effects';

import { decrement, increment, init, set } from './counter.actions';
import { selectCounter } from './counter.selector';
import { AppState } from '../app.state.model';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<AppState>);

  loadCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const localCountData = localStorage.getItem('current-count');

        if (localCountData) {
          return of(set({ countX: +localCountData }));
        }

        return of(set({ countX: 0 }));
      }),
    );
  });

  saveCount = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(increment, decrement),
        // withLatestFrom(() => this.store.select(selectCounter)),
        concatLatestFrom(() => this.store.select(selectCounter)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('current-count', counter.toString());
        }),
      );
    },
    { dispatch: false },
  );

  /*
  // old way of handling effects
  @Effect({ dispatch: false })
  saveCount = this.actions$.pipe(
    ofType(increment, decrement),
    tap(action => {
      console.log(action);
      localStorage.setItem('current-count', action.countX.toString());
    })
  );
  */
}

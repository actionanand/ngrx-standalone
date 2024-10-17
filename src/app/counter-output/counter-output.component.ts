/* eslint-disable @ngrx/no-typed-global-store */
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state.model';
import { selectCounter, selectDouble } from '../store/counter-store/counter.selector';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
})
export class CounterOutputComponent implements OnInit {
  private store = inject(Store<AppState>);
  private destroyRef = inject(DestroyRef);

  counter!: number;

  count$!: Observable<number>;
  doubleCount$!: Observable<number>;

  ngOnInit(): void {
    // this.count$ = this.store.select('counter');
    // this.count$ = this.store.select(s => s.counter);

    this.count$ = this.store.select(selectCounter);
    this.doubleCount$ = this.store.select(selectDouble);

    const countSub = this.count$.subscribe({
      next: val => (this.counter = val),
    });

    this.destroyRef.onDestroy(() => countSub.unsubscribe());
  }
}

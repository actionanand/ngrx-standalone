import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter-store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  private store = inject(Store);

  increment() {
    this.store.dispatch(increment({ countX: 1 }));
  }

  decrement() {
    this.store.dispatch(decrement({ countX: 1 }));
  }
}

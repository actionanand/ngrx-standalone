import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { rootReducer } from './app/store/rootReducer';
import { CounterEffects } from './app/store/counter-store/counter.effects';

bootstrapApplication(AppComponent, {
  providers: [provideStore(rootReducer), provideEffects([CounterEffects])],
}).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideStore } from '@ngrx/store';

import { rootReducer } from './app/store/rootReducer';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [provideStore(rootReducer), provideEffects()],
}).catch(err => console.error(err));

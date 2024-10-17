import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideStore } from '@ngrx/store';

import { rootReducer } from './app/store/rootReducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore(rootReducer)],
}).catch(err => console.error(err));

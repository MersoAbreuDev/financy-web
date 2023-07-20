import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { firebaseConfig } from './firebase-config'; // Import the firebase-config.ts file

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

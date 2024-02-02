import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

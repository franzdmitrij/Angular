import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Test, x } from './test';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const test = new Test(42);
console.log(test.zahl);
console.log(x);

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  class Test{
    constructor(public zahl: number){
      console.log("test");
    }
  }

const test = new Test(42);
const test2 = new Test(43);

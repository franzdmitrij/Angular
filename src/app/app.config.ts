import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({eventCoalescing: true}),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes,
      withComponentInputBinding(),
      //withDebugTracing()
    ),
    provideHttpClient()
  ]
};

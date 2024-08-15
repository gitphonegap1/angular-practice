import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { DataTrans } from './services/data';
import { provideHttpClient } from '@angular/common/http';
import { CLIPBOARD_OPTIONS, ClipboardButtonComponent, provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withRouterConfig(
      {
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always'
      }), withHashLocation()), 
    DataTrans, 
    provideHttpClient(),
    provideMarkdown()
  ]
};

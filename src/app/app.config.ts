import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { DataTrans } from './services/data';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { CLIPBOARD_OPTIONS, ClipboardButtonComponent, provideMarkdown } from 'ngx-markdown';
import { InterceptorService } from './services/interceptor';
import { HttpInService } from './services/httpservice';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withRouterConfig(
      {
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always'
      }), withHashLocation()), 
    DataTrans, 
    provideHttpClient(withInterceptors([InterceptorService]), withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInService,
      multi: true
    },
    provideMarkdown()
  ]
};

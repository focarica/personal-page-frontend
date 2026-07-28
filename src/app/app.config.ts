import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners, SecurityContext } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { provideMarkdown, SANITIZE } from 'ngx-markdown';
import { httpErrorInterceptor } from './shared/handlers/HttpErrorInterceptor';
import { GlobalErrorHandler } from './shared/handlers/GlobalErrorHandler';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpErrorInterceptor])
    ),
    provideMarkdown({
      sanitize: {
        provide: SANITIZE, 
        useValue: SecurityContext.NONE
      }
    }),
    { provide: ErrorHandler, useClass: GlobalErrorHandler }, provideClientHydration(withEventReplay())
  ]
};

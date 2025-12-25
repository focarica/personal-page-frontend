import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {

      // Backend offline / erro de rede
      if (error.status === 0) {
        return throwError(() => error);
      }

      if (error.status === 404) {
        router.navigate(['/not-found']);
        return throwError(() => error);
      }

      if (error.status >= 500) {
        if (!router.url.startsWith('/error')) {
          router.navigate(['/error']);
        }
      }

      return throwError(() => error);
    })
  );
};


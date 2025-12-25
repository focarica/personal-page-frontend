import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  private router = inject(Router);

  handleError(error: unknown) {
    console.error(error);
    this.router.navigate(['/error']);
  }
}

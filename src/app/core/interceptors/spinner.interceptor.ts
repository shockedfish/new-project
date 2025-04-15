import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('spinner interceptor...');
  let spinner = inject(NgxSpinnerService)
  spinner.show()
  return next(req).pipe(
    delay(500),
    finalize(() => {
      spinner.hide()
    })
  );
};

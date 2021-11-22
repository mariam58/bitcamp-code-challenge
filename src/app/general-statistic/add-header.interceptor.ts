import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if(request.url.startsWith('https://corona-api.com/countries')){
    //   const clonedRequest: HttpRequest<any> = request.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json',
    //     }
    //   });
    //   return next.handle(clonedRequest);
    // }


    return next.handle(request);
  }
}

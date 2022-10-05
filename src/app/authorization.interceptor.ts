import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchServiceService } from './Services/branch-service.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private bservice:BranchServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) : Observable<HttpEvent<unknown>>{
    //return next.handle(request);
    const modifiedrequest = request.clone({
      headers:request.headers.append(
        'Authorization',`${localStorage.getItem('token')}`,
      )
    })
    return next.handle(modifiedrequest);
  }
}

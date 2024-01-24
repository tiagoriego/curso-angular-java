import { Injectable, inject } from '@angular/core';
import {
 HttpRequest,
 HttpHandler,
 HttpEvent,
 HttpInterceptor,
 HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
 constructor(private loginService: LoginService, private appService: AppService) {}

 intercept(
   request: HttpRequest<unknown>,
   next: HttpHandler
 ): Observable<HttpEvent<unknown>> {
   const appInfo = this.appService.getApp();
   const reqAppInfo = request.clone({
     headers: request.headers
       .set('x-app-name', appInfo.name)
       .set('x-app-version', appInfo.version),
   });
   const authToken = this.loginService.getToken()
   if (authToken) {
     const authReq = reqAppInfo.clone({
       headers: reqAppInfo.headers.set('Authorization', `Bearer ${authToken}`),
     });
     return next.handle(authReq);
   }
   return next.handle(reqAppInfo);
 }
}

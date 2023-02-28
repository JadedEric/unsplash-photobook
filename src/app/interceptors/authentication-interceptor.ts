import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // for UnSplash API calls to succeed, must the `Accept-Version` header be present with all calls
    if (!req.headers.has('Accept-Version')) {
      req = req.clone({
        headers: req.headers.set('Accept-Version', environment.acceptVersion)
      });
    }

    // for UnSplash API calls to succeed, must the Bearer authentication be set with the secret api_key
    if (!req.headers.has('Authorization')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Client-ID ${environment.unsplash.apiKey}`
        }
      });
    }

    return next.handle(req);
  }

}

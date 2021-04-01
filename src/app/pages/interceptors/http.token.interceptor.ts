import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from '../../@core/mock';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    if (req.url.endsWith('user/cv-upload')) {
      delete headersConfig['Content-Type'];
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}

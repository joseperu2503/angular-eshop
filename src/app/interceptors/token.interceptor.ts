import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

const CHECK_AUTH = new HttpContextToken<boolean>(() => false)

export function checkAuth(){
  return new HttpContext().set(CHECK_AUTH, true)
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(CHECK_AUTH)){
      request = this.addToken(request)
    }
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>){
    const token = this.tokenService.getToken()
    if(token){
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}` )
      })

      return authReq
    }

    return request
  }
}

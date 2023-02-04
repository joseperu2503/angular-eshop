import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { checkAuth } from '../interceptors/token.interceptor';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth'
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
  }

  profile(){
    return this.http.get<User>(`${this.apiUrl}/profile`,{
      context: checkAuth()
    })
  }

}

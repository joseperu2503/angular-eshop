import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { checkAuth } from '../interceptors/token.interceptor';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(data: any){
    return this.http.post<Auth>(`${this.apiUrl}/login`, data)
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

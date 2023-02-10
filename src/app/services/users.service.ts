import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { CreateUserDTO, User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = `${environment.API_URL}/users`

  constructor(
    private http: HttpClient
  ) { }

  register(dto: CreateUserDTO){
    this.http.post<User>(this.apiUrl, dto)
    .subscribe(
      response => console.log(response)
    )
  }


}

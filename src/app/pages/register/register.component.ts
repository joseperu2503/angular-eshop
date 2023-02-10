import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private userService: UsersService,
    private router: Router
  ){}

  register(){
    this.userService.register({
      name: 'jose',
      email: 'jose@gmail.com',
      password: '1234'
    })
  }
}

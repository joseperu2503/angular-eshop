import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UsersService
  ){}

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), MyValidators.validatePassword])
  })

  register(){
    if(this.form.valid){
      this.userService.register(this.form.value)
    }else{
      this.form.markAllAsTouched()
    }
  }

  getProfile(){
    this.authService.profile()
    .subscribe( response => {
      console.log('user', response)
    })
  }

  get name(){
    //está mejor esta forma que la de login
    return this.form.controls['name']
  }

  get email(){
    return this.form.controls['email']
  }

  get password(){
    return this.form.controls['password']
  }

}

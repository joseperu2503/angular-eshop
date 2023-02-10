import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  login(){
    if(this.form.valid){
      this.authService.login(this.form.value)
      .subscribe( response => {
        this.getProfile()
      })
    }else{
      this.form.markAllAsTouched()
    }

  }

  ngOnInit(): void {
    // solo funciona con formControls
    // this.email.valueChanges
    // .subscribe( value => console.log(value))

  }

  getProfile(){
    this.authService.profile()
    .subscribe( response => {
      console.log('user', response)
    })
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }
}

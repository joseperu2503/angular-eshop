import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSideBar: boolean = false
  counter: number = 0
  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
  }

  toggle(){
    this.showSideBar = !this.showSideBar
    console.log(this.showSideBar)
  }

  token = ''
  user: User | null = null


  login(){
    this.authService.login('joseperu2503@gmail.com', 'luciusgibson')
    .subscribe( response => {
      this.token = response.access_token
      this.getProfile(this.token)
    })
  }

  getProfile(token: string){
    this.authService.profile(token)
    .subscribe( response => {
      this.user = response
    })
  }
}

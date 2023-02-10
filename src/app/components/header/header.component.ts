import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSideBar: boolean = false
  counter: number = 0
  categories: Category[] = []
  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoriesService.getAllCategories()
    .subscribe(
      response => {
        console.log(response)
        this.categories = response
      }
    )
  }

  toggle(){
    this.showSideBar = !this.showSideBar
    console.log(this.showSideBar)
  }

  user: User | null = null

  goLogin(){
    this.router.navigate([`/login`])
  }

  goRegister(){
    this.router.navigate([`/register`])
  }


}

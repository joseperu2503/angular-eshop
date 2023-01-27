import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myCart = new BehaviorSubject<Product[]>([])
  private myShoppingCart: Product[] = []

  myCart$ = this.myCart.asObservable()
  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart(){
    return this.myShoppingCart
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }
}

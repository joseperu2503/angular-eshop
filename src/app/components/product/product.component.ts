import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product
  @Output() showDetail = new EventEmitter()
  constructor(
    private storeService: StoreService,
    private router: Router
  ){}

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product)
  }

  // onShowDetail(){
  //   this.showDetail.emit()
  // }

  goToProduct(){
    this.router.navigate([`/product/${this.product.id}`])
  }
}

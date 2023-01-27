import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product

  constructor(
    private storeService: StoreService
  ){}

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product)
  }
}

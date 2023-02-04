import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[] = []
  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(response =>
      this.products = response
    )
  }

}

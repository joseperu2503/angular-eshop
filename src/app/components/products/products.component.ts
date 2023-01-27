import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(
    private productsService: ProductsService
  ){}

  products: Product[] = []

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(response =>
      this.products = response
    )
  }

}

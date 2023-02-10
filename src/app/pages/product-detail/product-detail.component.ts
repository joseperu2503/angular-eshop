import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ){}

  productId: string | null = null
  product: Product | null = null

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.route.paramMap
    .pipe(
      switchMap( params => {
        this.productId = params.get('id')
        if(this.productId){
          return this.productsService.getOne(this.productId)
        }
        return [null]
      })
    )
    .subscribe(
      data => {
        console.log(data)
        this.product = data
      }
    )
  }

  updateProduct(){
    if(this.product && this.productId){
      this.productsService.update(this.productId,{
        title: 'iphone 14',
        categoryId: 1,
        images: this.product?.images,
        price: 2000,
        description: 'asdadsfsdf dds'
      })
      .subscribe(
        response => {
          console.log(response)
          this.getProduct()
        }
      )
    }

  }

  deleteProduct(){
    if(this.product && this.productId){
      this.productsService.delete(this.productId)
      .subscribe(
        response => {
          console.log(response)
          this.goToBack()
        }
      )
    }

  }


  goToBack(){
    this.location.back()
  }
}

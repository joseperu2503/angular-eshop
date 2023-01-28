import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

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
  showProductDetail: boolean = false
  productSelected: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    description: ''

  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(response =>
      this.products = response
    )
  }

  selectProduct(id: number){
    this.productsService.getProduct(id)
    .subscribe(response => {
      // console.log(response)
      this.productSelected = response
      this.showProductDetail = true
    })
  }

  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Nueo producto',
      description: 'bla bla bla ',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 1

    }
    this.productsService.create(product)
    .subscribe( response => {
      console.log('created', response)
    })
  }
}

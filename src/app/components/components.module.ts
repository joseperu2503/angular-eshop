import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    ProductComponent,
    ProductsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }

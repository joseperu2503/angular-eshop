import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ProductComponent,
    ProductsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }

import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CreateProductDTO, Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }

  getByCategory(categoryId: string){
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`)
  }

  getProduct(id: number){
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }

  create(data: CreateProductDTO){
    return this.http.post<Product>(`${this.apiUrl}/products`, data)
  }

  getOne(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

}

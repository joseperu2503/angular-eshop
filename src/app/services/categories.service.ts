import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = `${environment.API_URL}/api/categories`

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(){
    return this.http.get<Category[]>(`${this.apiUrl}`)
  }

}

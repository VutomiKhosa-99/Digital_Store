import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

const URL = 'http://localhost:2000'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() : Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${URL}/products  
     `
    )

  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { map } from 'rxjs';


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

  
  //getting product by id
  get(id: any): Observable<any> {
    return this.httpClient.get('${this.URL}/Product/${id}');
  }

  getProduct(id: string): Observable<Product | undefined> {
    return this.getAllProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p._id === id))
      );
  }
  
}

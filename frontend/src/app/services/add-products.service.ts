import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, map } from 'rxjs';
import { Product } from '../models/Product';
import { Injectable } from '@angular/core';





const URL = 'http://localhost:2000';



@Injectable({
  providedIn : 'root'
})
  
export class AddProductsService {

  constructor(private http: HttpClient) { }

  products(title:string, description:string, size:number,color:string,price:number,category:string,image:string, availableStock:number, brand: string): Observable<any> {
    return this.http.post(
      URL + '/products',
      {
        title,
    description,
    size,
    brand,
    color,
    price,
    category,
    image,
    availableStock
      }
     
    );
  }
  
}

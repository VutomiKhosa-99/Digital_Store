import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { AddProductsService } from 'app/services/add-products.service';
import { HttpClient } from '@angular/common/http';


const URL = 'http://localhost:2000'
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent  implements OnInit{


   product?: Product;
  
  products: Product[] = []


  
  

  constructor(
    private productsService: ProductsService,
    private http: HttpClient 
    
    ) {}

   getProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
       
    })

   }
  
   ngOnInit(): void {
    this.getProducts()
   }
  
   deleteProducts(_id: string) {
    this.productsService.delProduct(_id).subscribe({})
    window.location.reload()
 }
}

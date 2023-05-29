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

 updateProducts(data:any , _id: string) {


  let body = {


     title: data.name,
      description: data.description,
      size:data.size,
      brand: data.brand,
      color: data.color,
      price: data.price,
      category: data.category,
      image: data.image,
      availableStock: data.availableStock
      }

  this.productsService.updateData(body,_id).subscribe(data=>{
    this.product=data
      window.location.reload()

  })
}
}

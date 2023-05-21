import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {Product } from '../models/Product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  products: Product[] = []
  Sproduct: Product
  
  pId: string;
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    let _id = this.route.snapshot.paramMap.get('_id');
    this.pId = _id
    this.getProduct()
  }
  
 getProduct() {
    this.productsService.getOneProduct(this.pId).subscribe(prod => {
     // this.products = products
      console.warn(prod,"mmm")
       
    })
   
 

  }


  

 // getProducts() {
     //  this.productsService.get()
    // this.productsService.get(this.pId).subscribe(product => {
    //   this.product = product
    //   console.warn(this.product," product received")
       
    // })

//  }



  // getSelectedProduct() {
  //   this.productsService.get(this.pId)
  //   console.log(this.product, "test id")

  // }

     

}



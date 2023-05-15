import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []
  
  @Input() product?: Product;

  
  constructor(private productsService: ProductsService, private cartService:CartService) {}

  
  
  getProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
       
    })

  }


  ngOnInit(): void {
    this.getProducts()
  }

  addToCart() {
    this.cartService.addToCart(this.product)
  }


}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit{


  products: Product[] = []

  constructor(public cartService: CartService){}

  ngOnInit(): void {
    this.products = this.cartService.cartProducts
    
  }

}

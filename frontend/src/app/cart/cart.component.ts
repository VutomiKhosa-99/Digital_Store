import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product?: Product;

  constructor(public cartService: CartService, public storageService: StorageService) { }
  ngOnInit(): void {

  }
  
  addToCart() {
         this.cartService.addToCart(this.product)
  }

   removeFromCart() {
    if (this.product) {
      this.cartService.removeFromCart(this.product?._id);
    }
  }
}


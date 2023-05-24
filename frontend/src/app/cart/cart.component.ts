import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() product?: Product;

  constructor(public cartService: CartService) { }
  
  addToCart() {
         this.cartService.addToCart(this.product)
  }

   removeFromCart() {
    if (this.product) {
      this.cartService.removeFromCart(this.product?._id);
    }
  }
}


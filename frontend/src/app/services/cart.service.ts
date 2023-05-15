import { Injectable } from '@angular/core';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];
  

  constructor() { }

  addToCart(product: Product) {
    this.cartProducts.push(product);
    console.log(product, "prod added in cart")
  }

  getTotalPrice(): number {
    let total = 0;

    for (let i = 0; i < this.cartProducts.length; i++) {
      total += this.cartProducts[i].price;
      
    }
    return total;
  }

 removeFromCart(productId: string) {
    this.cartProducts = this.cartProducts.filter(product => product._id !== productId)
  }


}

import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];
  

  constructor(private storageService: StorageService) { }

  addToCart(product: Product) {
    this.cartProducts.push(product);
    this.createCartSession();
  }

  createCartSession(){

    this.storageService.saveCartSession(this.cartProducts);

  }

  getCartSession() : any{
    return this.storageService.getCart();
  }
  

  getTotalPrice(): number {
    let total = 0;

    for (let i = 0; i < this.cartProducts.length; i++) {
      total += this.cartProducts[i].price;
      
    }
    return total;
  }

  getTaxAmount(): number {

    let percent = 15/100
    let tax = (this.getTotalPrice() * percent)
    

    return tax;
  }

  getSubTotal(): number {
    
    return 30 + this.getTotalPrice()
  }

 removeFromCart(productId: string) {
    this.cartProducts = this.cartProducts.filter(product => product._id !== productId)
  }


 

}

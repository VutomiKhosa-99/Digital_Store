import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

import { StorageService } from './storage.service';

import { Cart, CartItem } from '../models/Cart'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartProducts: Product[] = [];
  cart = new BehaviorSubject<Cart>({ items: [] });
  

  constructor(private toastr: ToastrService) { }

  addToCart(item: CartItem) : void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.toastr.success('1 item added to cart.', 'Success', { timeOut: 3000 });
    console.log(items, "prod added in cart")
  }

  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );


    if (updateCart) {
      this.cart.next({ items: filteredItems });
      
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this.toastr.success('1 item removed from cart.', 'Success', { timeOut: 3000 });
    
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.toastr.success('Cart cleared.', 'Ok', { timeOut: 3000 });
    
  }
  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }


  // getTotalPrice(): number {
  //   let total = 0;

  //   for (let i = 0; i < this.cartProducts.length; i++) {
  //     total += this.cartProducts[i].price;
      
  //   }
  //   return total;
  // }

//  removeFromCart(productId: string) {
//     this.cartProducts = this.cartProducts.filter(product => product._id !== productId)
//   }


 

}

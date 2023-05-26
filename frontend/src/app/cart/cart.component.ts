import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';
import { Cart, CartItem } from '../models/Cart';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @Input() product?: Product;
  cart: Cart = { items: [] };
  isplayedColumns: string[] = [
    'title',
    'image',
    'price',
    'quantity',
    'total',
    'action',
  ];

  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;
  

  constructor(private cartService: CartService, private httpClient: HttpClient ) { }
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }
  
  // addToCart() {
  //        this.cartService.addToCart()

  // }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  //  removeFromCart() {
  //   if (this.product) {
  //     this.cartService.removeFromCart(this.product?._id);
  //   }
  // }

  onCheckout(): void {
    this.httpClient
      .post('http://localhost:2000/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        console.log(res)
        });
  }



ngOnDestroy() {
  if (this.cartSubscription) {
    this.cartSubscription.unsubscribe();
  }
}

}


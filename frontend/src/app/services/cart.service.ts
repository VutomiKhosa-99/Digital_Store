import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = [];
  quantity = 0
  

  constructor(private storageService: StorageService) { }

  addToCart(product: Product) {
    this.cartProducts.push(product);
    //-----check if there are items already added in cart
    let existingItems = [];
    if ( localStorage.getItem('cart_items')){//----- update by adding new items
      existingItems = JSON.parse(localStorage.getItem('cart_items'));
      existingItems = [product, ...existingItems];
      console.log( 'Items exists');
    }
    //-----if no items, add new items
     else{ 
      console.log( 'NO items exists');
      existingItems = [product]
    } 

    this.saveCart();
    this.createCartSession();


    // const items = [...this.cartProducts];

    // const itemInCart = items.find((_item) => _item === product);
    // console.log(itemInCart,"found in cart");
    

    // if (itemInCart) {
    //  // itemInCart.quantity += 1;
    // } else {
    //  // items.push(item);
    // }
    // this.cart.next({ items });
    // this.toastr.success('1 item added to cart.', 'Success', { timeOut: 3000 });
    // console.log(items, "prod added in cart")
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
    const index = this.cartProducts.findIndex(o => o._id === productId);

    if (index > -1) {
      this.cartProducts.splice(index, 1);
      this.saveCart();
    }
  }


  getItems() {
    return this.cartProducts;
  } 

  loadCart(): void {
    this.cartProducts = JSON.parse(localStorage.getItem("cart_items")) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts)); 
  }

  clearCart(items) {
    this.cartProducts = [];

    localStorage.removeItem("cart_items")
  }



  itemInCart(item): boolean {
    return this.cartProducts.findIndex(o => o._id === item.id) > -1;
  }

}

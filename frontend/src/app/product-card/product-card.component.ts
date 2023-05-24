import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    @Input() product?: Product;

  constructor(private productService: ProductsService, private cartService: CartService, private storageService: StorageService) {}



  checkIfCartExist(){

     let activeCart = this.storageService.getCart()
     if(!activeCart){
      this.storageService.saveCartSession(this.cartService.cartProducts)
     }else{
      activeCart = this.storageService.saveCartSession(this.cartService.cartProducts)
     }
  
  }

   addToCart() {
    this.cartService.addToCart(this.product)
    this.checkIfCartExist();
  }

}

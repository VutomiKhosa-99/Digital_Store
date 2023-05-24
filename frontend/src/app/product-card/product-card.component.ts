import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Cart, CartItem } from '../models/Cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    @Input() product: Product | undefined;
    @Input() fullWidthMode = false;
    @Output() addToCart = new EventEmitter();

  constructor(private productService: ProductsService, private cartService: CartService) { }

   onAddToCart() {
    this.addToCart.emit(this.product)
  }

}

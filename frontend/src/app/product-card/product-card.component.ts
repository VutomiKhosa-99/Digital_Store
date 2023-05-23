import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    @Input() product?: Product;

  constructor(private productService: ProductsService, private cartService: CartService) { }

   addToCart() {
    this.cartService.addToCart(this.product)
  }

}

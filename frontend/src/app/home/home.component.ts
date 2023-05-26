import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> | undefined
  
  productsSubscription: Subscription | undefined;
  category: string | undefined;
  

  
  constructor(
    private productsService: ProductsService, 
    private cartService:CartService,
    private userService: UserService
    ) {}

    ngOnInit(): void {
      this.getProducts()
    }

  onShowCategory(newCategory: string): void {
      this.category = newCategory;
      this.getProducts();
    }
  
  getProducts() {
    this.productsSubscription = this.productsService
    .getAllProducts().subscribe(_products => {
      this.products = _products
       
    })
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
      id: product._id,
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }


 
 


}

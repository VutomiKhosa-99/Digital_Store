import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  getProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products

      console.log(this.products)
    })

  }

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts()
  }



}

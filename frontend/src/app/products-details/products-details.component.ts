import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {Product } from '../models/Product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

    products: Product[] = []

   @Input() product?: Product;

    constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    ){}

  ngOnInit(): void {
      }

     
}




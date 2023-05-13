import { Component, OnInit } from '@angular/core';
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
  product: Product | undefined

    constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
    ){}

  ngOnInit(): void {
        this.get_Product();
      }

      get_Product(): void {
            const id = (this.route.snapshot.paramMap.get('id'));
            console.log("this is an id :",id)
            this.productsService.get(id)
              .subscribe((product:any) =>{
                console.log(product)
                this.product = product;
              } );
  
            }
}




// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../Services/product.service';
// import { Movie } from '../types/data-types';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
// //youb have to import the cart services and function

// @Component({
//   selector: 'app-watch-button',
//   templateUrl: './watch-button.component.html',
//   styleUrls: ['./watch-button.component.scss']
// })
// export class WatchButtonComponent implements OnInit{

//   movie: Movie | undefined

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private location: Location
//     ){}

//   ngOnInit(): void {
//     this.get_Movie();
//   }


//    get_Movie(): void {
//     const id = (this.route.snapshot.paramMap.get('id'));
//     console.log("this is an id :",id)
//     this.productService.get(id)
//       .subscribe((movie:any) =>{
//         console.log(movie)
//         this.movie = movie;
//       } );
//   }







// }
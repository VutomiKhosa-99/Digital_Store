// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../services/products.service';
// import {Product } from '../models/Product';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';


// export class ProductsDetailsComponent implements OnInit {
//   product: Product | undefined

//     constructor(
//     private route: ActivatedRoute,
//     private productsService: ProductsService,
//     private location: Location
//     ){}

//   ngOnInit(): void {
//         this.get_Product();
//       }

//       get_Product(): void {
//             const id = (this.route.snapshot.paramMap.get('id'));
//             console.log("this is an id :",id)
//             this.productsService.get(id)
//               .subscribe((product:any) =>{
//                 console.log(product)
//                 this.product = product;
//               } );
  
//             }
// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')).toString();
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: string): void {
    this.productsService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}







// }
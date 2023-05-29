import { Component, OnInit } from '@angular/core';
import { AddProductsService } from 'app/services/add-products.service';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent  implements OnInit 
{
  form: any = {
    title: null,
    description: null,
    size:null,
    brand: null,
    color: null,
    price: null,
    category: null,
    image: null,
    availableStock: null
  };
  isSuccessful = false;
  isAddProductFailed = false;
  errorMessage = '';


  
  constructor(
    private addproductsService: AddProductsService,
    private productsService: ProductsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
 
onSubmit(): void {

   
    const { title, description, size,color,price,category,image, availableStock, brand} = this.form;
   
    this.addproductsService.products(title, description, size,color,price,category,image, availableStock, brand)
      .subscribe({
        next: data => {
      console.log(data,"addad prod");
      
      //   this.isSuccessful = true;
      //   setTimeout(()=> {
      //     this.router.navigate(['/home'])
      //   }, 2000)
      //   this.isAddProductFailed = false;
      // },
      // error: err => {
      //   this.errorMessage = err.error.message;
      //   this.isAddProductFailed = true;
      }
    });
 
  
    }
  }

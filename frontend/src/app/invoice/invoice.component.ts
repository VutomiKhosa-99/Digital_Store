import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{

  finalDate: string
  emptyCart : false
  


  constructor(public cartService: CartService){
  }

    cartEmpty() {
      this.cartService.cartProducts
      this.cartService.clearCart(this.cartService.cartProducts)
    }

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    this.finalDate = dd + '/' + mm + '/' + yyyy;
    //document.write(this.finalDate);
    



  }



}

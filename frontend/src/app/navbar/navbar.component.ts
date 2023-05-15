import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(public cartService: CartService) {}
}

import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-size-guide',
  templateUrl: './size-guide.component.html',
  styleUrls: ['./size-guide.component.css']
})
export class SizeGuideComponent {


  @Input() product?: Product;

  constructor(public productService : ProductsService) {}

}

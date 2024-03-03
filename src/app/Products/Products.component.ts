import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../ProductCard/ProductCard.component';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  standalone: true,
  imports: [ProductCardComponent]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ProductCard',
  templateUrl: './ProductCard.component.html',
  styleUrls: ['./ProductCard.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, HttpClientModule, MatButtonModule],
  providers: [ProductService]
})
export class ProductCardComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.prodottiPerCani;
    });
  }

}

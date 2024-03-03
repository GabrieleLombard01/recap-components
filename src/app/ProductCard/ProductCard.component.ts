import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-ProductCard',
  templateUrl: './ProductCard.component.html',
  styleUrls: ['./ProductCard.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

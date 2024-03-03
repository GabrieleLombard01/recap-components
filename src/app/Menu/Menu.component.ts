import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Menu',
  standalone: true,
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss'],
  imports: [CommonModule]
})
export class MenuComponent implements OnInit {

  Links = ["Home", "Prodotti", "Contatti"];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {

  @Input() curr_prod ;
 

  constructor() { }
  
  ngOnInit(): void {
  }

}

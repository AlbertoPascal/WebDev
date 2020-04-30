import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos=[
    {titulo:"Jeans", foto:"../../assets/images/jeans.jpg", price:400},
    {titulo:"Camisa", foto:"../../assets/images/flannel.jpg", price:350},
    {titulo:"Playera gris", foto:"../../assets/images/tshirt.jpg", price:250},
    {titulo:"Playera negra", foto:"../../assets/images/black_tshirt.jpg", price:250}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
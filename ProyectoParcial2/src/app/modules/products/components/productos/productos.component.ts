import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos=[
    {titulo:"Jeans", foto:"../../assets/images/jeans.jpg"},
    {titulo:"Camisa", foto:"../../assets/images/flannel.jpg"},
    {titulo:"Playera gris", foto:"../../assets/images/tshirt.jpg"},
    {titulo:"Playera negra", foto:"../../assets/images/black_tshirt.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
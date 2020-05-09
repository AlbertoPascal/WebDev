import { Component, OnInit } from '@angular/core';
import { ProductoData } from '../../models/producto-data.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos: ProductoData[];

  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe((data)=>{
      console.log(data);
      this.productos= data;  
   }) 
  }


}
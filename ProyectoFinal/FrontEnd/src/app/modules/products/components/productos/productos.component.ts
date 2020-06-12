import { Component, OnInit } from '@angular/core';
import { ProductoData } from '../../models/producto-data.model';
import { ProductosService } from '../../services/productos.service';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { JsonPipe } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos: ProductoData[] =[];
  unico : ProductoData;
  isSearched: boolean = false;
  loading:boolean = true;

  config: any;
  collection = 0

  constructor(public productosService:ProductosService, private activatedRoute: ActivatedRoute) { 
    this.config = {
      id: "product_pag",
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.productos.length
    };
  }

  ngOnInit(): void {
    let search:string; 
    //Se consiguen los parametros de la página para obtener la busqueda deseada
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['s']){
        search = params['s'];
        this.isSearched = true;
        //Con la busqueda se manda a llamar a la funcion getProductos()
        this.getProductos(search);
      }
      else{
        this.loading = false;
      }
    });
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  async getProductos(search: string){
    this.productosService.getProductos(search).subscribe((data)=>{
      
      console.log(data);

      //Longitud del arreglo de resultados
      var len = Object.keys(data.search_results).length;
      
      for(var i = 0; i<len; i++ ){
        //Si el resultado tiene precio, se agrega al arreglo de resultados
        if(data.search_results[i].prices){
          this.unico = new ProductoData(data.search_results[i].title, data.search_results[i].image, data.search_results[i].prices[0].value);
          this.productos.push(this.unico);
        }
      }

      this.loading = false;

   })
    this.config = {
      id: "product_pag",
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.productos.length
    }; 
  }
}
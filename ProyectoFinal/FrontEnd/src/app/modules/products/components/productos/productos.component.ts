import { Component, OnInit } from '@angular/core';
import { ProductoData } from '../../models/producto-data.model';
import { ProductosService } from '../../services/productos.service';
import {SearchService} from '../../../../services/search.service'
import { Subscription } from 'rxjs';
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

  //var productos = new ProductoData();
  subscription: Subscription;

  constructor(public productosService:ProductosService, public searchService: SearchService, private activatedRoute: ActivatedRoute) { 

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
    });
  }

  async getProductos(search: string){
    this.productosService.getProductos(search).subscribe((data)=>{
      console.log(data);
      //console.log(data.search_results[0].title);
      //console.log(data.search_results[0].prices[0].value);

      var len = Object.keys(data.search_results).length;
      console.log(len);
      //var i = 0;
      for(var i = 0; i<len; i++ ){
        if(data.search_results[i].prices){
          this.unico = new ProductoData(data.search_results[i].title, data.search_results[i].image, data.search_results[i].prices[0].value);
          this.productos.push(this.unico);
          //console.log(this.unico);
        }
        else{
          //this.unico = new ProductoData(data.search_results[i].title, data.search_results[i].image, data.search_results[i].prices[0].value);
          //this.productos.push(this.unico);
        }
       
        //this.unico.titulo=data.search_results[i].title;
        //this.unico.foto=data.search_results[i].image;
        //this.unico.precio=data.search_results[i].prices[0].value;
      }

   }) 
  }


}
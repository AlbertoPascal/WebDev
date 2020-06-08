import { Component, OnInit } from '@angular/core';
import { ProductoData } from '../../models/producto-data.model';
import { ProductosService } from '../../services/productos.service';
import {SearchService} from '../../../../services/search.service'
import { Subscription } from 'rxjs';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos: ProductoData[] =[];
  unico : ProductoData;

  //var productos = new ProductoData();
  subscription: Subscription;

  constructor(public productosService:ProductosService, public searchService: SearchService) { 
    
  }

  ngOnInit(): void {
    this.subscription = this.searchService.getSearch().subscribe(search => {
      if (search) {
        this.getProductos(search.text);
        this.searchService.clearSearch();
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
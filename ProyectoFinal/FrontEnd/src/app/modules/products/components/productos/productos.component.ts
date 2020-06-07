import { Component, OnInit } from '@angular/core';
import { ProductoData } from '../../models/producto-data.model';
import { ProductosService } from '../../services/productos.service';
import {SearchService} from '../../../../services/search.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

  productos: ProductoData[];
  subscription: Subscription;

  constructor(public productosService:ProductosService, private searchService: SearchService) { 

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
      console.log(data.search_results[0].title);
      console.log(data.search_results[0].prices[0].value);
   }) 
  }


}
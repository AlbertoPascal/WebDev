import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
//import { SearchbarComponent } from '../home/components/searchbar/searchbar.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ProductosComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HomeModule,
  ]
})
export class ProductsModule { }

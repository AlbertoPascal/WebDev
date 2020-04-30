import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductosComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }

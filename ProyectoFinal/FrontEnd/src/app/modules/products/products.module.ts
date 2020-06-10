import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
//import { SearchbarComponent } from '../home/components/searchbar/searchbar.component';
import { HomeModule } from '../home/home.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ProductosComponent, ProductCardComponent, SpinnerComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HomeModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ]
})
export class ProductsModule { 


}

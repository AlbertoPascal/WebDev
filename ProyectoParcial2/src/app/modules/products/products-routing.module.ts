import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'search', component : ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

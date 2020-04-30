import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:"./modules/home/home.module#HomeModule"},
  {path:'products', loadChildren:"./modules/products/products.module#ProductsModule"},
  {path:'profile', loadChildren:"./modules/profile/profile.module#ProfileModule"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

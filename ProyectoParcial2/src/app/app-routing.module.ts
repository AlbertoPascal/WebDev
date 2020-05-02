import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '',
    redirectTo: "/home",
    pathMatch: 'full'},
  {path:'home', loadChildren:"./modules/home/home.module#HomeModule"},
  {path:'products', loadChildren:"./modules/products/products.module#ProductsModule"},
  {path:"PageNotFound", loadChildren:"./modules/home/home.module#HomeModule"},
  {path:'profile', loadChildren:"./modules/profile/profile.module#ProfileModule"},
  {path:'**',redirectTo: "/PageNotFound",  pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

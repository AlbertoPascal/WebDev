import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path:'home', loadChildren:"./modules/home/home.module#HomeModule"},
  {path:'products', loadChildren:"./modules/products/products.module#ProductsModule"},
  {path:"PageNotFound", loadChildren:"./modules/not-found/not-found.module#NotFoundModule"},
  {path:'profile', loadChildren:"./modules/profile/profile.module#ProfileModule", canActivate:[AuthGuard]},
  {path:'**',redirectTo: "/PageNotFound",  pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }

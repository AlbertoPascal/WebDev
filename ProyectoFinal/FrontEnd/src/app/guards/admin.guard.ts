import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {UserInfoService} from '../services/user-info.service'
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, public router: Router, public userInfoService:UserInfoService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      return this.auth.getUser$().pipe(
        tap(user=>{
          this.userInfoService.getUser(user.sub).subscribe((data)=>{
            if(data[0].isAdmin){
              return true;
            }
            else{
              return false;
              this.router.navigate(['/PageNotFound']);
            }
          })
        })
      );



      
      /*this.auth.getUser$().subscribe((data)=>{

        if(data){
          this.userInfoService.getUser(data.sub).subscribe((user)=>{
            
            return user[0].isAdmin;
            
          })
        }
        
        else{
          return false;
        }

      });*/

  }
  
}

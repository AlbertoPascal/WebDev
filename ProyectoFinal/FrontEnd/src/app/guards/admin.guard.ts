import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {UserInfoService} from '../services/user-info.service'
import {tap, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, public router: Router, public userInfoService:UserInfoService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve, reject) => { this.auth.getUser$().pipe(
        tap(user=>{
          this.userInfoService.getUser(user.sub).subscribe((data)=>{
            
            if(data[0].isAdmin){
              return resolve(data[0].isAdmin);
            }
            else{
              return resolve(false);
            }

          })
        })
      );
    })

    
    }
  
}

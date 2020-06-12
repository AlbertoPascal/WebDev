import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { RecentactivityData } from '../models/recentactivity-data.model';
import { AuthService} from 'src/app/services/auth.service';
import { WishlistService } from '../services/wishlist.service';
import {UserInfoService} from '../../../services/user-info.service';

@Injectable({
  providedIn: 'root'
})

export class RecentactivityService {

  constructor(public auth:AuthService, public userInfoService: UserInfoService, public wishlistService:WishlistService) { }

  async getRecentActivity(user_auth_id:string){

    var balance;
    var meta;
    var salario;
    var limiteGasto;

    let promise = this.userInfoService.getUser(user_auth_id).subscribe((data)=>{

      balance = data[0].savings - data[0].expenses;

      this.wishlistService.getWishlist(user_auth_id).subscribe((wishlist)=>{

        meta = wishlist[0].Goal.precio;

      })

    });

    await promise;

    let recentactivity:RecentactivityData = new RecentactivityData(balance, meta, 200, 500);

    return of(recentactivity);

  }
  
}

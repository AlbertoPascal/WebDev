import { Component, OnInit } from '@angular/core';
import { RecentactivityData } from '../../models/recentactivity-data.model';
import { RecentactivityService } from '../../services/recentactivity.service';
import { AuthService} from 'src/app/services/auth.service';
import { WishlistService } from '../../services/wishlist.service';
import {UserInfoService} from '../../../../services/user-info.service';

@Component({
  selector: 'app-profile-recent-activity',
  templateUrl: './profile-recent-activity.component.html',
  styleUrls: ['./profile-recent-activity.component.scss']
})
export class ProfileRecentActivityComponent implements OnInit {

  recentActivity: RecentactivityData = {};

  constructor(public wishlistService:WishlistService, public auth:AuthService, public userInfoService: UserInfoService) { }

  ngOnInit(): void {  
    this.getProductos();
  }

  balance=0;
  meta=0;
  salario=0;
  limiteGasto=0;

  async getProductos(){
    
    this.auth.getUser$().subscribe((data)=>{
      
      if(data){
        this.userInfoService.getUser(data.sub).subscribe((user)=>{

          this.balance = user[0].savings - user[0].expenses;
          this.salario = user[0].salario;
          this.limiteGasto = user[0].salario * 0.5;
          this.wishlistService.getWishlist(data.sub).subscribe((wishlist)=>{
            
            if(wishlist[0].Goal == null){
              this.meta = 0;
            }
            else{
              this.meta = wishlist[0].Goal.precio;
            }
          
          })
        });
      } 
    });
  }

}

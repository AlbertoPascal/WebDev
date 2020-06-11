import { Component, OnInit } from '@angular/core';

import { SavingsProgressBarService } from '../../services/savings-progress-bar.service';
import {MoneyManagerService} from '../../services/money-manager.service';

import { AuthService} from 'src/app/services/auth.service';
import { WishlistService } from '../../services/wishlist.service';
import { UserInfoService} from 'src/app/services/user-info.service';
import { WishlistProductData } from '../../models/wishlist-product-data.model';

@Component({
  selector: 'app-profile-progressbar',
  templateUrl: './profile-progressbar.component.html',
  styleUrls: ['./profile-progressbar.component.scss'],

})
export class ProfileProgressbarComponent implements OnInit {

  constructor(public wishlistService:WishlistService, public auth:AuthService, public userInfoService:UserInfoService) { 
    
    
  }

  precio:number = 0;
  ahorros: number = 0;
  porcentaje: number = 0;
  meta:String="";
  isThereGoal: boolean = false;

  ngOnInit(): void {
    this.getGoal();
    this.getSavings();
  }

  getSavings(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        let subscription2 =this.userInfoService.getUser(data.sub).subscribe((user)=>{

          this.ahorros = user[0].savings - user[0].expenses;

          if(this.ahorros<=0){
            this.ahorros = 0;
            this.porcentaje = 0;
          }
          else if(this.ahorros>=this.precio){
            this.porcentaje = 100;
          }
          else{
            this.porcentaje = (this.ahorros / this.precio) * 100;
            this.porcentaje = Math.round(this.porcentaje);
          }

          subscription2.unsubscribe();
        }) 

      }
      else{
        alert("Error 403");
        window.location.href = "/home";
      }

      subscription.unsubscribe();
    });
  }

  getGoal(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        let subscription2 =this.wishlistService.getWishlist(data.sub).subscribe((wishlist)=>{

          if(wishlist[0].Goal!=null){
            this.precio = wishlist[0].Goal.precio;
            this.meta = wishlist[0].Goal.titulo;
            this.isThereGoal = true;
          }

          subscription2.unsubscribe();
        }) 

      }
      else{
        alert("Error 403");
        window.location.href = "/home";
      }

      subscription.unsubscribe();
    });
  }



}

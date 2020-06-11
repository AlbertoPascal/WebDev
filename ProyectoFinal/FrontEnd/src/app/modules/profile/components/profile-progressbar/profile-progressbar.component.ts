import { Component, OnInit } from '@angular/core';

import { SavingsProgressBarService } from '../../services/savings-progress-bar.service';
import {MoneyManagerService} from '../../services/money-manager.service';

import { AuthService} from 'src/app/services/auth.service';
import { WishlistService } from '../../services/wishlist.service';
import { WishlistProductData } from '../../models/wishlist-product-data.model';

@Component({
  selector: 'app-profile-progressbar',
  templateUrl: './profile-progressbar.component.html',
  styleUrls: ['./profile-progressbar.component.scss']
})
export class ProfileProgressbarComponent implements OnInit {

  constructor(public currentSavings:SavingsProgressBarService, public wishlistService:WishlistService, public auth:AuthService) { 
    
    
  }

  precio:number = 0;
  isThereGoal: boolean = false;

  ngOnInit(): void {
    this.getGoal();
    this.currentSavings.getSavings();
  }

  getGoal(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        let subscription2 =this.wishlistService.getWishlist(data.sub).subscribe((wishlist)=>{

          if(wishlist[0].Goal!=null){
            this.precio = wishlist[0].Goal.precio;
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

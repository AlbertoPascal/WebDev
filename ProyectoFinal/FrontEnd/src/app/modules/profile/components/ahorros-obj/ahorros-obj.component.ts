import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService} from 'src/app/services/auth.service';
import { WishlistProductData } from '../../models/wishlist-product-data.model';

//import { GoalData} from '../..'
@Component({
  selector: 'app-ahorros-obj',
  templateUrl: './ahorros-obj.component.html',
  styleUrls: ['./ahorros-obj.component.scss']
})
export class AhorrosObjComponent implements OnInit {

  goal: WishlistProductData;
  isThereGoal: boolean = false;

  constructor(public wishlistService:WishlistService, public auth:AuthService) { 
  }

  ngOnInit(): void {
    this.getGoal();
  }

  getGoal(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        this.wishlistService.getWishlist(data.sub).subscribe((wishlist)=>{

          if(wishlist[0].Goal!=null){
            this.goal = new WishlistProductData(wishlist[0].Goal.titulo, wishlist[0].Goal.foto, wishlist[0].Goal.precio);
            this.isThereGoal = true;
          }
        }) 

      }
      else{
        alert("Error 403");
        window.location.href = "/home";
      }

      subscription.unsubscribe();
    });
  }

  deleteGoal(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        this.wishlistService.deleteGoal(data.sub).subscribe((wishlist)=>{
          console.log(wishlist);

          setTimeout(() => {
            this.goal = null;
            this.isThereGoal = false;
            this.ngOnInit();

          }, 250);
        }) 

      }

      subscription.unsubscribe();
    });
  
  }
}

import { Component, OnInit } from '@angular/core';
import { WishlistProductData } from '../../models/wishlist-product-data.model';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-profile-wishlisht',
  templateUrl: './profile-wishlisht.component.html',
  styleUrls: ['./profile-wishlisht.component.scss']
})
export class ProfileWishlishtComponent implements OnInit {

  wishlistProducts: WishlistProductData[];

  constructor(public wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
      this.wishlistService.getWishlistProducts().subscribe((data)=>{
        console.log(data);
        this.wishlistProducts= data;  
    }) 
  }
}

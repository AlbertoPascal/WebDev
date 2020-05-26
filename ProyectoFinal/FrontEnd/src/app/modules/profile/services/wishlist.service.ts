import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { WishlistProductData } from '../models/wishlist-product-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  getWishlistProducts():Observable<WishlistProductData[]>{
    let wishlistProducts:WishlistProductData[] = [
      new WishlistProductData("Pantalones skynny jeans Levis",  500),
      new WishlistProductData("Animal Crossing Nintendo Switch", 1300),
      new WishlistProductData("Honda Fit 2015", 200000),
      new WishlistProductData("Nintendo Switch", 7999),
      new WishlistProductData("Peluche Axolotes", 50)
    ];

    return of(wishlistProducts);
  }

  constructor() { }
}

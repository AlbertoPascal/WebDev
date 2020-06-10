import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { WishlistProductData } from '../models/wishlist-product-data.model';
import { AuthService} from 'src/app/services/auth.service';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  endpoint= 'http://localhost:8080/api/Wishlist/';

  constructor(private http: HttpClient, public auth: AuthService) { }

  getWishlistProducts(auth_user_id:string):Observable<any>{

    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      //Se agregan los headers
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.endpoint+auth_user_id, requestOptions);
    
    /*let wishlistProducts:WishlistProductData[] = [
      new WishlistProductData("Pantalones skynny jeans Levis",  500),
      new WishlistProductData("Animal Crossing Nintendo Switch", 1300),
      new WishlistProductData("Honda Fit 2015", 200000),
      new WishlistProductData("Nintendo Switch", 7999),
      new WishlistProductData("Peluche Axolotes", 50)
    ];

    return of(wishlistProducts);*/
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errorsi
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}

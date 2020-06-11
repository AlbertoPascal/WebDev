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
  endpoint_delete = 'http://localhost:8080/api/Wishlist/deleteItem/';

  constructor(private http: HttpClient, public auth: AuthService) { }

  //Obtener los productos de una wishlist
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

  }

  //Borrar un producto de la wishlist
  deleteItem(auth_user_id:string, posicion:number):Observable<any>{

    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      //Se agregan los headers
      headers: new HttpHeaders(headerDict),

      body:{
        posicion: posicion,
      },
      
    };

    return this.http.delete(this.endpoint_delete+auth_user_id, requestOptions);
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

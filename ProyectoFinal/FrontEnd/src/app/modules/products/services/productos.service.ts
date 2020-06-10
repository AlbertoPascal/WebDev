import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { ProductoData } from '../models/producto-data.model';
import { AuthService} from 'src/app/services/auth.service';

import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  endpoint= 'https://api.rainforestapi.com/request';
  endpoint_wishlist= 'http://localhost:8080/api/Wishlist/addItem';

  constructor(private http: HttpClient, public auth: AuthService) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
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

  //funcion para obtener los valores de productos de la API
  getProductos(search_term:string):Observable<any>{

    const params = {
      api_key: "11B43D7286984C879C3EA2EE498F50E0",
      type: "search",
      language: "es_ES",
      customer_location: "mx",
      associate_id: "amazon0d0663-20",
      include_html: "false",
      output: "json",
      amazon_domain: "amazon.com.mx",
      search_term: search_term,
      page: "1",
      sort_by: "featured"
    }

    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {

      //Se agregan los headers
      headers: new HttpHeaders(headerDict),
      
      //Se agregan los datos del usuario al body para hace el post
      params: params,
    };
  
    return this.http.get(this.endpoint, requestOptions);
  }
  
  //Funcion para agregar un producto a la wishlist del usuario
  addToWishlist(titulo:string, foto: string, precio:number){

    var user_auth_id;

    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){
        user_auth_id = data.sub;

        var headerDict = {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
        };

        const requestOptions = {

          //Se agregan los headers
          headers: new HttpHeaders(headerDict),
          
          //Se agregan los datos del producto al body para hace el post
          titulo: titulo, 
          foto: foto, 
          precio: precio, 
        };

        //Post
        this.http.post(this.endpoint_wishlist +'/'+ user_auth_id, requestOptions).subscribe({
          next: data => console.log(data),
          error: error => this.handleError(error),
        });
      }      

      else{
        alert("Inicia sesión para agregar productos a la wishlist");
      }
      //Si no hay ninguna sesión activa, se termina la función
      subscription.unsubscribe();
      return;
    });   
  }
}

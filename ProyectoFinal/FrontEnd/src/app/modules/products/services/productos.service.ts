import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { ProductoData } from '../models/producto-data.model';
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
  constructor(private http: HttpClient) { }

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
    var productos:ProductoData[];
    var productest = new ProductoData();
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
  
    /*this.http.get(this.endpoint, requestOptions).subscribe({
      next: data => console.log(data),
      error: error => this.handleError(error),
    });*/
    //var parseData=JSON.parse(data);

    //console.log(productos);
    //return (this.productos = this.http.get('data'));
    //return this.http.get(this.endpoint).pipe(map(res => res = res.data));
    //return of(productos);
    return this.http.get(this.endpoint, requestOptions);
  }
  
}

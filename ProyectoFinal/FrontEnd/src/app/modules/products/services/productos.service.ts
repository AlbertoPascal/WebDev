import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { ProductoData } from '../models/producto-data.model';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  endpoint= 'https://api.rainforestapi.com/request';

  getProductos(search_term:string):Observable<any>{
    var productos:ProductoData[];
    var productest = new ProductoData();
    const params = {
      api_key: "86B6800CF3654E8CBFDDE8E768B887FF",
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

    /*{titulo:"Jeans", foto:"../../assets/images/jeans.jpg", price:400},
    {titulo:"Camisa", foto:"../../assets/images/flannel.jpg", price:350},
    {titulo:"Playera gris", foto:"../../assets/images/tshirt.jpg", price:250},
    {titulo:"Playera negra", foto:"../../assets/images/black_tshirt.jpg", price:250}*/
    
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

  
}

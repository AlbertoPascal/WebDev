import { Injectable } from '@angular/core';
import { SaveDataModel } from '../models/save-data-model.model';
import {UserInfoService} from '../../../main-components/services/user-info.service';
import { of, Observable, throwError} from 'rxjs';
import {SessionData} from '../../../main-components/models/session-data.model';
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
export class MoneyManagerService {
  
  active_user_info = JSON.parse(localStorage.getItem('active_user'));
  Operation = new SaveDataModel();
  Curr_User = new SessionData();
  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  transaction_endpoint = 'http://localhost:8080/api/Transaction';



  async updateSavings(oper_type:string, quantity:number, description:string){
    if (this.auth.loggedIn)
    {
      let curr_user_sub:string;
      await this.auth.getUser$().subscribe(function(data){
        
            curr_user_sub = data.sub;
            console.log("Logged User Sub: "+curr_user_sub)
            //subscription.unsubscribe();
           
          });
        console.log(curr_user_sub);
        var headerDict = {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
        }
        const requestOptions = {

          //Se agregan los headers
          headers: new HttpHeaders(headerDict),
          
          //Se agregan los datos del usuario al body para hace el post
          user_sid: curr_user_sub, 
          quantity: quantity, 
          direction: oper_type, 
          comment: description, 
          currency:'MXN', 
          
        };
        console.log(requestOptions);
        this.http.post(this.transaction_endpoint, requestOptions).subscribe({
          next: data => console.log(data),
          error: error => this.handleError(error),
        });

      }
     /* a fin de cuentas esto no sirve pero lo dejo porque se me hizo curioso que aquí no regrese nada pero arriba sí
     Podríamos tener algo mal en el servicio maybe...
      this.test_usr.getUser(curr_user_sub).subscribe((usr_data) => {
        console.log(usr_data);
      })
      */

    
    
    

    /*Object.assign(this.Curr_User, this.active_user_info);
    
    this.Operation.user = this.Curr_User.user_auth_id;
    this.Operation.motif=description;
    console.log("STARTINGS: " + this.Operation);

    //Now we extract my total savings: default 1000;
    let get_user_savings = 'select savings from users where user_name = "' + this.Curr_User.user_auth_id;
    if(this.Operation.total_savings == undefined)
    {
      this.Operation.total_savings =+ 1000; //this value should always be retrieved from our database
    }
    if(oper_type == 'cost')
    {
      this.Operation.addCosts(quantity);
      //update values on db, DESCRIPTION INCLUDED
      let update_sav = "update users set description = '" + this.Operation.motif + "', savings = " + this.Operation.total_savings + " where user_name = " + this.Operation.user;
    }
    else{
      console.log("on money manager quantity is : " + quantity );
      this.Operation.AddSavings(quantity);
      //update values on db, DESCRIPTION N/A.
      let update_sav = "update users set savings = " + this.Operation.total_savings + " where user_name = " + this.Operation.user;
    }
    console.log(this.Operation);
    */
    return of(this.Operation);
  }
  updateCosts():Observable<SaveDataModel>{
    console.log(this.active_user_info);
    return of(this.Operation);
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
 
  constructor(private http: HttpClient, public auth: AuthService, public test_usr:UserInfoService) { }
}

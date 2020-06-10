import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {SessionData} from '../main-components/models/session-data.model'
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {

  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  //Modelo para el usuario
  user: SessionData;

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

  //Función para registrar un usuario en la base de datos
  public registerUser(given_name:string, family_name:string, picture:string, sub:string, email:string) {
    
    this.getUser(sub).subscribe((data) => {

      //Si el usuario ya está en la db
      if(data[0]){
        console.log("El usuario " + data[0].user_auth_id + " ya está en la base de datos");
      }

      //Si el usuario todavía no está en la db, se hace un post para registrarlo
      else{

        console.log("El usuario no está registrado en la db");
        var username = given_name + " " + family_name;
        username = username.replace(/\s+/g, '_');
        var headerDict = {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'Access-Control-Allow-Origin': '*',
        };
        const wishlistRequestOptions = {
          headers: new HttpHeaders(headerDict),
          wishlist_id:sub
        }
        this.http.post(this.wishlist_endpoint, wishlistRequestOptions).subscribe({
          next:data =>console.log(data),
          error: error=> this.handleError(error),
        });
        const requestOptions = {

          //Se agregan los headers
          headers: new HttpHeaders(headerDict),
          
          //Se agregan los datos del usuario al body para hace el post
          user_auth_id: sub, 
          nombre: given_name, 
          apellido: family_name, 
          profilePic: picture,  
          email: email,
          job:"",
          wishlist_id : sub,
          isAdmin:false,
          savings:0,
          username: username,
        };

        //Post
        this.http.post(this.endpoint, requestOptions).subscribe({
          next: data => console.log(data),
          error: error => this.handleError(error),
        });
      }
    });
  }

  //Función para obtener un solo usuario de la base de datos con el auth id
  getUser(user_auth_id:string): Observable<any> {
    console.log("Mi request es " + this.endpoint + "/" + user_auth_id);
    return this.http.get(this.endpoint + "/" + user_auth_id );
  }

  /*Función para saber si un usuario es admin
  public isAdmin(user_auth_id:string): boolean{

    var isAdmin;

    let subscription = this.getUser(user_auth_id).subscribe((data) => {
      console.log("Isadmin del usuario "+ data[0].isAdmin);
      isAdmin = data.isAdmin;
      return isAdmin;
      subscription.unsubscribe();
    });

    
  }*/

  /*
  public RegisterUser(user_auth_id:string, password:string, job:string, email:string, name:string, lastname:string):Observable<SessionData>{
    console.log("Estoy en register Users")
    if(this.userSignUp())
    {
      this.User.setName(name, lastname);
      this.User.setJob(job);
      this.User.setuserAuth(user_auth_id);
      //this.User.setPassword(password);
    }
    else{
      this.User.setName('','');
      this.User.setJob('');
      this.User.setuserAuth('');
      //this.User.setPassword('');
    }
    
    return of(this.User);
  }*/

  /* public retrievePassword(){
    //Get password form database according to the user set. in case we want to log in
    //first we check if user exists. 
    let user_auth_id = this.User.user_auth_id;
    let temp_user = 'query to see if user exists';
    //then we extract its password with a query. 
    if (temp_user == '')
    {
        //user does not exist. Therefore I return an alert saying it doesnt exist and return false. 
        alert("Dev: user did not exist. returning no password");
        this.User.setPassword('');
        return (this.User);
    }
    else{
        //we retrieve the password and assign it. 
        let temp_pass = 'query with temp user';
        alert("Found user_auth_id. Retrieving password for comparison");
        this.User.setPassword('password');
        return (this.User);
    }
  } */

  /*
  public ResetPassword():Observable<SessionData>{
    //We erase the previously stored password to prevent data theft.
    //this.User.setPassword('');
    return of(this.User);
  }

  public retrieveEmail(){
    //query from database in case we are trying to login according to the user and passwords given.
    this.User.email = 'getfromdb@randomemail.com'
  }

  public userSignUp(){
    //first validate that there are no users with that email
    console.log("Estoy en user sign up");
    let temp_email_query:string='select count(*) from users where user_auth_id = "' + this.User.user_auth_id + '"' + ' or email = "' + this.User.email + '";';
    let temp_user_auth_id:string='';
    if(temp_email_query == '' || temp_user_auth_id!='')
    {
        return false; //this means there is already someone registered under that email or user_auth_id and I can't insert.
    
    }
    else{
        //we insert into database
        alert("Values correctly inserted into database");
        return true; //this means I successfully inserted values into my db
    }
    
  }
  userLogin():Observable<SessionData>{
    return of(this.User);
  }
  */
}

import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {SessionData} from '../models/session-data.model';
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
export class UserInfoService {
  endpoint = 'http://localhost:8080/api/User';

  public User= new SessionData();
  constructor(private http: HttpClient) { } 
  
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
public testFunc(given_name:string, family_name:string, picture:string, sub:string, email:string)
{
  this.User.name = given_name;
  this.User.lastName = family_name;
  this.User.email=email;
  this.User.user_auth_id = sub;
  this.User.profilePic = picture;
  console.log("Estoy en user info service y recibí a mi objeto: ");
  console.log(this.User);
  console.log("Primer intento de respuesta");
  console.log(this.getUser());
  console.log("regresé del request");
  //console.log(a);
}
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
getUser() {
  console.log('estoy en el getUser');
  console.log("Mi request es " + this.endpoint + "/1");
  return this.http.get(this.endpoint + "/1" );
}
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
}
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
  
}

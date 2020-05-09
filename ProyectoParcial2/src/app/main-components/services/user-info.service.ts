import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {SessionData} from '../models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public User= new SessionData();
   
  
  public retrievePassword():Observable<SessionData>{
    //Get password form database according to the user set. in case we want to log in
    //first we check if user exists. 
    let username = this.User.username;
    let temp_user = 'query to see if user exists';
    //then we extract its password with a query. 
    if (temp_user == '')
    {
        //user does not exist. Therefore I return an alert saying it doesnt exist and return false. 
        alert("Dev: user did not exist. returning no password");
        this.User.setPassword('');
        return of(this.User);
    }
    else{
        //we retrieve the password and assign it. 
        let temp_pass = 'query with temp user';
        alert("Found username. Retrieving password for comparison");
        this.User.setPassword('password');
        return of(this.User);
    }
    
}
public RegisterUser(username:string, password:string, job:string, email:string, name:string, lastname:string):Observable<SessionData>{
  if(this.userSignUp())
  {
    this.User.setName(name, lastname);
    this.User.setJob(job);
    this.User.setUsername(username);
    this.User.setPassword(password);
  }
  else{
    this.User.setName('','');
    this.User.setJob('');
    this.User.setUsername('');
    this.User.setPassword('');
  }
  
  return of(this.User);
}
public ResetPassword():Observable<SessionData>{
  //We erase the previously stored password to prevent data theft.
  this.User.setPassword('');
  return of(this.User);
}

public retrieveEmail(){
  //query from database in case we are trying to login according to the user and passwords given.
  this.User.email = 'getfromdb@randomemail.com'
}
public userSignUp(){
  //first validate that there are no users with that email
  
  let temp_email_query:string='select count(*) from users where username = "' + this.User.username + '"' + ' or email = "' + this.User.email + '";';
  let temp_username:string='';
  if(temp_email_query == '' || temp_username!='')
  {
      return false; //this means there is already someone registered under that email or username and I can't insert.
  
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
  constructor() { }
}

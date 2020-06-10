import { Injectable } from '@angular/core';
import {ProfileData} from '../models/profile-data.model';
import {SessionData} from '../../../main-components/models/session-data.model';
import { Observable, of , throwError} from 'rxjs';

import { AuthService} from 'src/app/services/auth.service';

import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditionService {
  Curr_User = new SessionData();
  active_user_info = JSON.parse(localStorage.getItem('active_user'));

  public UserEditData = new ProfileData();

  constructor(private http: HttpClient, public auth: AuthService) { 
    
  }
  
  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  transaction_endpoint = 'http://localhost:8080/api/Transaction';

  public uploadToDatabase(name:string, lastname:string, email:string, username:string, job:string, password:string, picture:string){
    
    
    //retrive the active user username
    Object.assign(this.Curr_User, this.active_user_info);
    this.UserEditData.username  =this.Curr_User.user_auth_id;
    
   
    //update our object. 
    this.UserEditData.setInfo(name, lastname, email, username, job, password, picture);
     //we update in database.
     let user_info = 'Update users set name =' + name + ', lastname = ' + lastname + ', email = ' + email + 'job = ' + job + ', password = ' + password + ', pic = ' + picture + ' where user_name = "' + this.UserEditData.username + '";';
    
    alert("Values sent to database");
    return of(this.UserEditData);
  }
  public async get_user_info(){
    var assignable_user = new ProfileData();
    
    if (this.auth.loggedIn)
    {
      let curr_user_sub:string;

      await this.auth.getUser$().subscribe(data=>{
        curr_user_sub = data.sub;
        console.log("Logged User Sub: " + curr_user_sub);
      });
      console.log(curr_user_sub + " recibido ");
      let promise1 = new Promise((resolve,reject)=>{
        this.http.get(this.endpoint + "/" + curr_user_sub).subscribe({
          next: data => {
            console.log(data);
            assignable_user.name = data[0].nombre;
            assignable_user.foto = data[0].profilePic;
            assignable_user.lastName = data[0].apellido;
            assignable_user.email = data[0].email;
            assignable_user.job = data[0].job;
            //assignable_user.username = data[0].username;
            console.log("My assignable user is");
            console.log(assignable_user);
            resolve(assignable_user);
          },
          error: error => this.handleError(error),
        });
      })
      
      console.log("out of suscribe I still have ");
      console.log(await promise1);

      return of(assignable_user);
    }
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
  public async retrieveUserData(){
    let test = new ProfileData();
    var test2 :ProfileData;
    let test_var:string;
    let fetch_data = (await this.get_user_info())
    console.log("Estoy en retrieve user data");
    let prom = new Promise( (resolve,reject)=>{

      fetch_data.subscribe(data=>{
        console.log("from the second promise" + data.name);
        test = data;
      })
      resolve(test);
    });
    
    console.log(await prom);
    

    //return await test;
    //console.log("ya terminando, este es el resultado : " + JSON.stringify(await resultado));
    
    
    /*let a = (await this.get_user_info()).subscribe((data) =>{
      console.log("I am the new test in retrieveUserData");
      let nombre:string;
      nombre = data.name;
      console.log(data);
      console.log("regresando afuera " + data.name);
      test_var = nombre;*/
      //alert(test2.name);
     /* test.foto = data.;
      test.name = data.name;
      test.lastName = data.lastName;*/
      //return test;
    //});
    //alert("afuera de mi promesa que tiene al suscribe " +test2.name);
    //console.log("Afuera de mi await to promise ");
    //alert("regresando hasta afuera" + test_var);
    return of(test);
    //return of(this.get_current_user());
    /*( this.get_current_user()).subscribe(await (data)=>
    {
      next: data => {
        console.log(data);
      } ,
      error: error => this.handleError(error),
    });
    return test;
    /*console.log("My test is ");
    console.log(test);
    Object.assign(this.Curr_User, this.active_user_info);
    this.UserEditData.username  =this.Curr_User.user_auth_id;
    let user_info = 'Select * from users where user_name = ' +  this.UserEditData.username + '";';
    let name = 'Default Name';
    let lastname = 'Default Lastname';
    let email = 'Default email';
    let username = this.UserEditData.username;
    let job = 'Default job';
    let password = this.UserEditData.password;
    let picture = 'default picture';
    return of(this.UserEditData); */
  }
  public degradeUser(){
    Object.assign(this.Curr_User, this.active_user_info);
    this.UserEditData.username  =this.Curr_User.user_auth_id;
    let user_info = 'update users set user_type = "regular" where user_name = ' +  this.UserEditData.username + '";';
  }
  public upgradeUser(){
    Object.assign(this.Curr_User, this.active_user_info);
    this.UserEditData.username  =this.Curr_User.user_auth_id;
    let user_info = 'update users set user_type = "admin" where user_name = ' +  this.UserEditData.username + '";';
  }
}

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
  update_endpoint = 'http://localhost:8080/api/updateUser';
  member_endpoint = 'http://localhost:8080/api/finduser';

  getUser(user_auth_id:string): Observable<any> {
    console.log("Mi request es " + this.endpoint + "/" + user_auth_id);
    return this.http.get(this.endpoint + "/" + user_auth_id );
  }
  searchUser(user_email:string):Observable<any>{
    console.log("Mi request es " + this.member_endpoint + "/" + user_email);
    return this.http.get(this.member_endpoint + "/" + user_email);
  }
  public async uploadToDatabase(name:string, lastname:string, email:string, username:string, job:string){
    
    
    let curr_user_sub:string;

    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      console.log("Logged User Sub: " + curr_user_sub);
    });
    
    console.log("Obtained user id: " + curr_user_sub);

    
    //update our object. 
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    }
    const requestOptions = {

      //Se agregan los headers
      headers: new HttpHeaders(headerDict),
      
      //Se agregan los datos del usuario al body para hace el post
      user_auth_id:curr_user_sub,
      nombre:name,
      apellido: lastname,
      job:job,
      email:email,      
      username:username,
    };
    console.log(requestOptions);
    this.http.post(this.update_endpoint, requestOptions).subscribe({
      next: data => console.log(data),
      error: error => this.handleError(error),
    });

    return of(await this.UserEditData);
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
            assignable_user.username = data[0].username;
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
  
    return of(test);
    //return of(this.get_Curr_User());
    /*( this.get_Curr_User()).subscribe(await (data)=>
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
  public async degradeUser(){
    let curr_user_sub:string;

      await this.auth.getUser$().subscribe(data=>{
        curr_user_sub = data.sub;
        console.log("Logged User Sub: " + curr_user_sub);
      });

      var headerDict = {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      }
      const requestOptions = {
  
        //Se agregan los headers
        headers: new HttpHeaders(headerDict),
        
        //Se agregan los datos del usuario al body para hace el post
        user_auth_id:curr_user_sub,
        isAdmin: false,
      }; 
      await this.http.post(this.update_endpoint,requestOptions).subscribe(data=>
        {
          console.log("Updated my user. New info is : ");
          console.log(data);
        })
  }
  public async upgradeUser(){
    let curr_user_sub:string;

      await this.auth.getUser$().subscribe(data=>{
        curr_user_sub = data.sub;
        console.log("Logged User Sub: " + curr_user_sub);
      });

      var headerDict = {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      }
      const requestOptions = {
  
        //Se agregan los headers
        headers: new HttpHeaders(headerDict),
        
        //Se agregan los datos del usuario al body para hace el post
        user_auth_id:curr_user_sub,
        isAdmin:true,
      }; 
      await this.http.post(this.update_endpoint,requestOptions).subscribe(data=>
        {
          console.log("Updated my user. New info is : ");
          console.log(data);
        })
    //Object.assign(this.Curr_User, this.active_user_info);
    //this.UserEditData.username  =this.Curr_User.user_auth_id;
    //let user_info = 'update users set user_type = "admin" where user_name = ' +  this.UserEditData.username + '";';
  }
  public async addMember(user_email:string){
    let curr_user_sub:string;

    let promesa1 = new Promise((resolve, reject) =>
    {
        this.auth.getUser$().subscribe(data=>{
        curr_user_sub = data.sub;
        console.log("Logged User Sub: " + curr_user_sub);
       });
       resolve(curr_user_sub);
      });
    console.log(await promesa1);
    console.log(curr_user_sub);

    let UserSID = await promesa1;
    let promesa2 = new Promise((resolve, reject)=>
    {
        this.getUser(curr_user_sub).subscribe(data=>{
        console.log("I'm inside AddMember and my value is ");
        console.log(data);
        console.log("pushing a family tesT");
        this.Curr_User = data[0];
        console.log("my arr length : " + this.Curr_User.Family_ids.length);
        console.log(this.Curr_User.Family_ids);
        
        resolve(this.Curr_User);
      });
      
    });
    let Userinfo = await promesa2;
    
    let User_to_add = new SessionData();
    let promesa3 = new Promise((resolve,reject)=>{
        this.searchUser(user_email).subscribe(data=>{
          console.log("I found the next user:" );
          console.log(data[0]);
          User_to_add = data[0];
          console.log("after assinging");
          console.log(User_to_add);
          resolve(User_to_add);
        });
    });
    let Addinfo = await promesa3;
    if(!this.Curr_User.Family_ids.includes(User_to_add.user_auth_id))
    {
      this.Curr_User.Family_ids.push(User_to_add.user_auth_id);
    }
    //this.Curr_User.Family.push(User_to_add.user_auth_id);
    console.log("I want to add user_sid "  + User_to_add.user_auth_id + " to user_sid " + this.Curr_User.user_auth_id);
    console.log("Current family: ");
    console.log(await this.Curr_User.Family_ids);
 
    //User was properly added to family. Need to update db

    //update our object. 
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };
    const requestOptions = {

      //Se agregan los headers
      headers: new HttpHeaders(headerDict),
      
      //Se agregan los datos del usuario al body para hace el post
      user_auth_id:this.Curr_User.user_auth_id,
      Family_ids:this.Curr_User.Family_ids,
    };
    console.log(requestOptions);
    this.http.post(this.update_endpoint, requestOptions).subscribe({
      next: data => console.log(data),
      error: error => this.handleError(error),
    });

    return of (this.Curr_User);
  }
}

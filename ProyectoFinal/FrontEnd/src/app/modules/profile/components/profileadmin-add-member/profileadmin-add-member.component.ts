import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Observable, of, throwError} from 'rxjs';
import {SessionData} from '../../../../main-components/models/session-data.model';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
}from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profileadmin-add-member',
  templateUrl: './profileadmin-add-member.component.html',
  styleUrls: ['./profileadmin-add-member.component.scss']
})
export class ProfileadminAddMemberComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService) { }
  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  transaction_endpoint = 'http://localhost:8080/api/Transaction';
  update_endpoint = 'http://localhost:8080/api/updateUser';
  member_endpoint = 'http://localhost:8080/api/finduser';

  MemberEmail  = new FormGroup({
    email: new FormControl(''),
  });
  Current_user = new SessionData();
  ngOnInit(): void {
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
  getUser(user_auth_id:string): Observable<any> {
    console.log("Mi request es " + this.endpoint + "/" + user_auth_id);
    return this.http.get(this.endpoint + "/" + user_auth_id );
  }
  searchUser(user_email:string):Observable<any>{
    console.log("Mi request es " + this.member_endpoint + "/" + user_email);
    return this.http.get(this.member_endpoint + "/" + user_email);
  }
  public async addMember(){
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
        this.Current_user = data[0];
        console.log("my arr length : " + this.Current_user.Family_ids.length);
        console.log(this.Current_user.Family_ids);
        
        resolve(this.Current_user);
      });
      
    });
    let Userinfo = await promesa2;
    
    let User_to_add = new SessionData();
    let promesa3 = new Promise((resolve,reject)=>{
        this.searchUser(this.MemberEmail.get('email').value).subscribe(data=>{
          console.log("I found the next user:" );
          console.log(data[0]);
          User_to_add = data[0];
          console.log("after assinging");
          console.log(User_to_add);
          resolve(User_to_add);
        });
    });
    let Addinfo = await promesa3;
    if(!this.Current_user.Family_ids.includes(User_to_add.user_auth_id))
    {
      this.Current_user.Family_ids.push(User_to_add.user_auth_id);
    }
    //this.Current_user.Family.push(User_to_add.user_auth_id);
    console.log("I want to add user_sid "  + User_to_add.user_auth_id + " to user_sid " + this.Current_user.user_auth_id);
    console.log("Current family: ");
    console.log(await this.Current_user.Family_ids);
 
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
      user_auth_id:this.Current_user.user_auth_id,
      Family_ids:this.Current_user.Family_ids,
    };
    console.log(requestOptions);
    this.http.post(this.update_endpoint, requestOptions).subscribe({
      next: data => console.log(data),
      error: error => this.handleError(error),
    });

    return of (this.Current_user);
  }
}

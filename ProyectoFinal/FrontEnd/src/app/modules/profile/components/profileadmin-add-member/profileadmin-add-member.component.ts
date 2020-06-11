import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Observable, of} from 'rxjs';
import {ProfileData} from '../../models/profile-data.model';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
}from '@angular/common/http';

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


  Current_user = new ProfileData();
  ngOnInit(): void {
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
        this.Current_user = data[0];
        resolve(this.Current_user);
      });
    });
    let Userinfo = await promesa2;
    let promesa3 = new Promise((resolve,reject)=>{
        this.searchUser(this.Current_user.email).subscribe(data=>{
          console.log("I found the next user:" );
          console.log(data);
        });
    })
    //Now we know the current user's information. I need to do a search of the user by its email:
    

    //now I need to add that user_id to my user's person array in case it is not there.


    console.log("outside of suscribe: ");
    console.log(await this.Current_user);


  }
}

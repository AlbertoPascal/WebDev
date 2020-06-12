import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { MemberTableData } from '../models/member-table-data.model';
import { AuthService} from 'src/app/services/auth.service';

import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { SessionData } from 'src/app/main-components/models/session-data.model';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MemberTableServiceService {

  constructor(private http: HttpClient, public auth: AuthService) { }
  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  transaction_endpoint = 'http://localhost:8080/api/Transaction';
  update_endpoint = 'http://localhost:8080/api/updateUser';
  Curr_user = new SessionData();
  getUser(user_auth_id:string): Observable<any> {
    console.log("Mi request es " + this.endpoint + "/" + user_auth_id);
    return this.http.get(this.endpoint + "/" + user_auth_id );
  }
  
  public async getMembers(){
    /*let curr_user_sub:string;

    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      console.log("Logged User Sub: " + curr_user_sub);
    });
    this.getUser(curr_user_sub).subscribe(data=>{

    })*/

    let curr_user_sub:string;

    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      console.log("Logged User Sub: " + curr_user_sub);
    });
    
    console.log("Obtained user id: " + curr_user_sub);
    
    let promesa = new Promise((resolve, reject)=>{
      this.getUser(curr_user_sub).subscribe(data=>{
        this.Curr_user = data[0];
        console.log("Inside my promise my user is ");
        console.log(this.Curr_user);
        resolve(this.Curr_user);

      });
    });

    let UserInfo = await promesa;
    console.log("my current user is");
    console.log(await UserInfo);
    let Fam_Array: SessionData[] = [];
    let promesa2 = new Promise((resolve,reject)=>{
      this.Curr_user.Family_ids.forEach((member)=>{
        console.log("I am on member" + member);
        this.getUser(member.valueOf()).subscribe(data=>{
            console.log("My user is : ");
            console.log(data[0]);
            Fam_Array.push(data[0]);
            
        });
      
        
      });
      resolve(Fam_Array);
    });
  
    let faminfo = await promesa2;

    console.log("mi fam array vale");
    console.log(await faminfo);
    let members:MemberTableData[] = [];

    let promesa3 = new Promise((resolve, reject)=>{
      var name;
      var img,job,ingreso,saldo,limite,count;
      var new_member;
      console.log("My family array has " + Fam_Array.length);
      Fam_Array.forEach((member)=>{
        name = member.nombre + " " + member.apellido;
        img = member.profilePic;
        job = member.job;
        ingreso = "27/03/2020";
        saldo = member.savings;
        limite = 5000;
        count = 3;
        new_member = new MemberTableData(name, img, job, ingreso, saldo, limite, count);
        members.push(new_member);
        console.log("Members now has: " );
        console.log(members);
      });
      resolve(Fam_Array);
    })

    //return of(Fam_Array);
    let resp = await promesa3;
    console.log("restp");
    console.log(resp);
    console.log("Ending iterations, array is " + JSON.stringify(await resp));
    
    return of(await promesa3);
    /*let members:MemberTableData[] = [
      new MemberTableData("Moises Torres", "../../assets/images/moi.jpeg", "Estudiante", "27/03/2020", 5000, 1000, 5),
      new MemberTableData("Alberto Pascal", "../../assets/images/alberto.jpeg", "Estudiante", "26/03/2020", 3300, 1250, 3),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("Jhonny Rocket", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Achilles Florales", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Josh Nickels", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Juan Rodriguez", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Mariano Narro", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Joaquin Perez", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Emiliano Zapata", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("X AE A-12", "../../assets/images/x_ae_a_12.jpg", "Estudiante", "04/05/2020", 999999, 999999999, 0),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
    ];*/

    
  }
}

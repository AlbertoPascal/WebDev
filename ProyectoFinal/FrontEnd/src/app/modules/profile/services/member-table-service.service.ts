import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { MemberTableData } from '../models/member-table-data.model';
import { AuthService} from 'src/app/services/auth.service';
import {WishlistService} from '../services/wishlist.service';
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

  constructor(private http: HttpClient, public auth: AuthService, public wishlistInfo: WishlistService) { }
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
    let Fam_Array: SessionData[] = [];
    let members:MemberTableData[] = [];

    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      
      this.getUser(curr_user_sub).subscribe(data2=>{
        this.Curr_user = data2[0];
          this.Curr_user.Family_ids.forEach((member)=>{
            console.log("I am on member" + member);
            console.log(this.Curr_user);
            
            this.getUser(member.valueOf()).subscribe(data3=>{
              this.wishlistInfo.getWishlist(data3[0].user_auth_id).subscribe(data4=>
                {
                  console.log("My user is : ");
                  console.log(data3[0]);
                  var name;
                  var img,job,ingreso,saldo,limite,count;
                  var new_member;
                  console.log("My family array has " + Fam_Array.length);
                    name = data3[0].nombre + " " + data3[0].apellido;
                    img = data3[0].profilePic;
                    job = data3[0].job;
                    ingreso = data3[0].Creation_date;
                    saldo = data3[0].savings - data3[0].expenses;
                    limite = 5000;
                    count = data4[0].Objects.length;
                    new_member = new MemberTableData(name, img, job, ingreso, saldo, limite, count);
                    members.push(new_member);
                    console.log("Members now has: " );
                    console.log(members);
                })
              
               
          });

        });
      });
    });
    return of(await members);
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

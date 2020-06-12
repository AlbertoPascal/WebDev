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
import { ProfileData } from '../models/profile-data.model';

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
                  var img,job,ingreso,saldo,limite,count,authid;
                  var new_member;
                  console.log("My family array has " + Fam_Array.length);
                    authid = data3[0].user_auth_id;
                    name = data3[0].nombre + " " + data3[0].apellido;
                    img = data3[0].profilePic;
                    job = data3[0].job;
                    ingreso = data3[0].Creation_date;
                    saldo = data3[0].savings - data3[0].expenses;
                    if(data3[0].salario == undefined || data3[0].salario == null || data3[0].salario == 0)
                    {
                      limite = (this.Curr_user.salario / (this.Curr_user.Family_ids.length +1)) * 0.5;
                    }
                    else
                      limite = data3[0].salario * 0.5;
                    count = data4[0].Objects.length;
                    new_member = new MemberTableData(authid,name, img, job, ingreso, saldo, limite, count);
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
  public async EraseMember(erase_user_auth_id:String)
  {
    let curr_user_sub;
    //let Curr_user = new ProfileData();
    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      this.getUser(curr_user_sub).subscribe(data2 =>
        {
          this.Curr_user = data2[0];
          console.log("My Family members were");
          console.log(this.Curr_user.Family_ids);
          let iterator = 0;
          let id_position = 0;
          this.Curr_user.Family_ids.forEach((id)=>{
              if(id == erase_user_auth_id)
              {
                id_position = iterator
              }
              else{
                iterator = iterator +1;
              }
          });
          this.Curr_user.Family_ids.splice(id_position);
          console.log("My Family members are now ");
          console.log(this.Curr_user.Family_ids);
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
            Family_ids: this.Curr_user.Family_ids,
          }; 
          this.http.post(this.update_endpoint,requestOptions).subscribe(data3=>
            {
              console.log("Updated my user. New info is : ");
              console.log(data3);
            })
        });
    });



  }

  public async updateMember(update_user_auth_id:String, new_salary:number)
  {
    let curr_user_sub;
    //let Curr_user = new ProfileData();
    await this.auth.getUser$().subscribe(data=>{
      curr_user_sub = data.sub;
      this.getUser(curr_user_sub).subscribe(data2 =>
        {
          this.Curr_user = data2[0];
          console.log("My Family members were");
          console.log(this.Curr_user.Family_ids);
          let iterator = 0;
          let id_position = 0;
          this.Curr_user.Family_ids.forEach((id)=>{
              if(id == update_user_auth_id)
              {
                id_position = iterator
              }
              else{
                iterator = iterator +1;
              }
          });
          //this.Curr_user.Family_ids.splice(id_position);
          //console.log("My Family members are now ");
          //console.log(this.Curr_user.Family_ids);
          var headerDict = {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
          }
          const requestOptions = {
      
            //Se agregan los headers
            headers: new HttpHeaders(headerDict),
            
            //Se agregan los datos del usuario al body para hace el post
            user_auth_id:update_user_auth_id,
            salario: new_salary * 2,
           
          }; 
          this.http.post(this.update_endpoint,requestOptions).subscribe(data3=>
            {
              console.log("Updated my user. New info is : ");
              console.log(data3);
            })
        });
    });



  }
}

import { Injectable } from '@angular/core';
import {ProfileData} from '../models/profile-data.model';
import {SessionData} from '../../../main-components/models/session-data.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileEditionService {
  Curr_User = new SessionData();
  active_user_info = JSON.parse(localStorage.getItem('active_user'));

  constructor(public UserEditData?:ProfileData) { 


  }
  public uploadToDatabase(name:string, lastname:string, email:string, username:string, job:string, password:string, picture:string):Observable<ProfileData>{
    //retrive the active user username
    Object.assign(this.Curr_User, this.active_user_info);
    this.UserEditData.username  =this.Curr_User.username;
    
   
    //update our object. 
    this.UserEditData.setInfo(name, lastname, email, username, job, password, picture);
     //we update in database.
     let user_info = 'Update users set name =' + name + ', lastname = ' + lastname + ', email = ' + email + 'job = ' + job + ', password = ' + password + ', pic = ' + picture + ' where user_name = "' + this.UserEditData.username + '";';
    
    alert("Values sent to database");
    return of(this.UserEditData);
}
public retrieveUserData():Observable<ProfileData>{
  Object.assign(this.Curr_User, this.active_user_info);
  this.UserEditData.username  =this.Curr_User.username;
  let user_info = 'Select * from users where user_name = ' +  this.UserEditData.username + '";';
  let name = 'Default Name';
  let lastname = 'Default Lastname';
  let email = 'Default email';
  let username = this.UserEditData.username;
  let job = 'Default job';
  let password = this.UserEditData.password;
  let picture = 'default picture';
  return of(this.UserEditData);
}

}

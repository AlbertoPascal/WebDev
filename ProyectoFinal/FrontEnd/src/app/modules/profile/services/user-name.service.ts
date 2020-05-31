import { Injectable } from '@angular/core';
import {ProfileData} from '../models/profile-data.model';
import { Observable, of} from 'rxjs';
import {SessionData} from '../../../main-components/models/session-data.model';
@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  userData = new ProfileData();
  Curr_User = new SessionData();
  active_user_info = JSON.parse(localStorage.getItem('active_user'));
  constructor() { }

  fetchData(){
    Object.assign(this.Curr_User, this.active_user_info);
    let userName="default";
    let userLastName="default";
    let userEmail="@defaul";
    let userUserName=this.Curr_User.user_auth_id;
    let userJob="default";
    let userPassword="default";
    let userFoto="../../../../../assets/images/camila.jpeg";

    this.userData.setInfo( userName, userLastName, userEmail, userUserName, userJob, userPassword, userFoto);
    
  }
}

import { Injectable } from '@angular/core';
import { SaveDataModel } from '../models/save-data-model.model';
import {UserInfoService} from '../../../main-components/services/user-info.service';
import { of, Observable } from 'rxjs';
import {SessionData} from '../../../main-components/models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class MoneyManagerService {

  active_user_info = JSON.parse(localStorage.getItem('active_user'));
  Operation = new SaveDataModel();
  Curr_User = new SessionData();
  

  updateSavings(oper_type:string, quantity:number, description:string):Observable<SaveDataModel>{
    Object.assign(this.Curr_User, this.active_user_info);
    
    this.Operation.user = this.Curr_User.username;
    this.Operation.motif=description;
    console.log("STARTINGS: " + this.Operation);

    //Now we extract my total savings: default 1000;
    let get_user_savings = 'select savings from users where user_name = "' + this.Curr_User.username;
    if(this.Operation.total_savings == undefined)
    {
      this.Operation.total_savings =+ 1000; //this value should always be retrieved from our database
    }
    if(oper_type == 'cost')
    {
      this.Operation.addCosts(quantity);
      //update values on db, DESCRIPTION INCLUDED
      let update_sav = "update users set description = '" + this.Operation.motif + "', savings = " + this.Operation.total_savings + " where user_name = " + this.Operation.user;
    }
    else{
      console.log("on money manager quantity is : " + quantity );
      this.Operation.AddSavings(quantity);
      //update values on db, DESCRIPTION N/A.
      let update_sav = "update users set savings = " + this.Operation.total_savings + " where user_name = " + this.Operation.user;
    }
    console.log(this.Operation);
    
    return of(this.Operation);
  }
  updateCosts():Observable<SaveDataModel>{
    console.log(this.active_user_info);
    return of(this.Operation);
  }
 
  constructor() { }
}

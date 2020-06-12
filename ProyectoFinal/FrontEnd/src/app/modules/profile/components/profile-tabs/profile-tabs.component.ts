import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from 'src/app/services/auth.service';
import {UserInfoService} from  'src/app/services/user-info.service'

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.scss']
})
export class ProfileTabsComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(public router: Router, public auth: AuthService, public db_user:UserInfoService) { }
  public user_type= localStorage.getItem('user_type');
  ngOnLoad(){
    
  }
  ngOnInit(): void {
    this.check_admin();
  }

  public check_admin(){

    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){
        let subscription2 = this.db_user.getUser(data.sub).subscribe((data2)=>{
          this.isAdmin = data2[0].isAdmin;

          subscription2.unsubscribe();
        })
      }

      subscription.unsubscribe();
      return;
    });
  }
}

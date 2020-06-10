import { Component, OnInit } from '@angular/core';
import { UserNameService} from '../../services/user-name.service';
import {UserInfoService} from '../../../../services/user-info.service';
import {AuthService} from '../../../../services/auth.service'

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  foto:string;
  usuario:string;

  constructor(public auth:AuthService, public userInfoService:UserInfoService) { }
  
  ngOnInit(): void {
    let subscription = this.auth.getUser$().subscribe((dataAuth)=>{

      let subscription2 = this.userInfoService.getUser(dataAuth.sub).subscribe((dataDB)=>{
        this.foto = dataDB[0].profilePic;
        this.usuario = dataDB[0].nombre + " " + dataDB[0].apellido;
        subscription2.unsubscribe();
      });

      subscription.unsubscribe();
    });
  }

}

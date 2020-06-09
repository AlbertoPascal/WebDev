import { Component, OnInit } from '@angular/core';
import { UserNameService} from '../../services/user-name.service';
import {AuthService} from '../../../../services/auth.service'

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  foto:string;
  usuario:string;

  constructor(private auth:AuthService) { }
  
  ngOnInit(): void {
    let subscription = this.auth.getUser$().subscribe((data)=>{
      this.foto = data.picture;
      this.usuario = data.given_name + " " + data.family_name;
    });
  }

}

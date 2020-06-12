import { Component, OnInit } from '@angular/core';
import {ProfileEditionService} from '../../services/profile-edition.service';
@Component({
  selector: 'app-editar-perfil-usr',
  templateUrl: './editar-perfil-usr.component.html',
  styleUrls: ['./editar-perfil-usr.component.scss']
})
export class EditarPerfilUsrComponent implements OnInit {

  constructor(public profileEdition:ProfileEditionService) { }

  ngOnInit(): void {
  }

  public async BecomeAdmin()
  { 
    await this.profileEdition.upgradeUser();
    alert("You are now an Admin!");
    window.location.href ="/profile/admin";
  }

}

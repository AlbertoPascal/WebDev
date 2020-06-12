import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProfileEditionService } from '../../services/profile-edition.service';

@Component({
  selector: 'app-editar-perfil-admin',
  templateUrl: './editar-perfil-admin.component.html',
  styleUrls: ['./editar-perfil-admin.component.scss']
})
export class EditarPerfilAdminComponent implements OnInit {
  //public defaultService:ProfileEditionService;
  constructor(public router: Router, public profileEdition:ProfileEditionService) { }

  ngOnInit(): void {
  }
  resetForms(){
    
  }
  public async giveupAdmin(){
    //localStorage.setItem('user_type','regular');
    await this.profileEdition.degradeUser();
    alert("You are no longer an Admin");
    this.router.navigateByUrl('profile/user');
    //this.defaultService.degradeUser();
  }
  showSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editar-perfil-admin',
  templateUrl: './editar-perfil-admin.component.html',
  styleUrls: ['./editar-perfil-admin.component.scss']
})
export class EditarPerfilAdminComponent implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  resetForms(){
    
  }
  giveupAdmin(){
    localStorage.setItem('user_type','regular');
    this.router.navigateByUrl('profile/user');
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

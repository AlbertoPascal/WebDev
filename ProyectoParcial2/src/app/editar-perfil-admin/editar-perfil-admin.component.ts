import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil-admin',
  templateUrl: './editar-perfil-admin.component.html',
  styleUrls: ['./editar-perfil-admin.component.scss']
})
export class EditarPerfilAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

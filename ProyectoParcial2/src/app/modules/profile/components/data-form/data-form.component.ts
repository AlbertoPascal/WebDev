import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }
  ProfileInfo:{name:string, lastName:string, email:string, username:string, job:string, password:string}
  editprofileForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    job: new FormControl(''),
    pass: new FormGroup(
      {
        password: new FormControl(''),
        ConfirmPass: new FormControl('')
      }
    )
  });
  ngOnInit(): void {
  }
  onCancel(){
    this.editprofileForm.reset();
    //falta agregar snackbar
  }
  onSave(){
    //update information on our database
    //igual falta agregar snackbar
    this.ProfileInfo.name = "hola";
    alert(this.editprofileForm.get('name').value);
    /*this.ProfileInfo.name=this.editprofileForm.get('name').value;
    this.ProfileInfo.lastName=this.editprofileForm.get('lastName').value;
    this.ProfileInfo.email=this.editprofileForm.get('email').value;
    this.ProfileInfo.username=this.editprofileForm.get('username').value;
    this.ProfileInfo.job=this.editprofileForm.get('job').value;
    this.ProfileInfo.password= this.editprofileForm.get('pass').get('password').value;
    alert("Información de perfil: \n" + this.ProfileInfo.name + '\n' + this.ProfileInfo.lastName + '\n' + this.ProfileInfo.email + '\n' + this.ProfileInfo.password + '\n' + this.ProfileInfo.job);
    */
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

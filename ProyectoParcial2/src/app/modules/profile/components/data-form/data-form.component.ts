import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ProfileEditionService } from '../../services/profile-edition.service';
import { ProfileData } from '../../models/profile-data.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})

export class DataFormComponent implements OnInit {

  DefaultData:ProfileData;

  constructor(public snackBar: MatSnackBar) { }
    openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }

  ProfileInfo = new ProfileEditionService();//{name:"Pedro", lastName:"Hernández", email:"pedrohdz@gmail.com", username:"PedroHdz", job:"Carpintero", password:"1234"}
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

  retrieveUserData(){
    this.ProfileInfo.retrieveUserData().subscribe((data)=>{
      console.log("Data from my init");
      console.log(data);
      this.DefaultData = data;  
      this.editprofileForm.get('name').setValue(this.DefaultData.name);
      this.editprofileForm.get('lastName').setValue(this.DefaultData.lastName);
      this.editprofileForm.get('email').setValue(this.DefaultData.email);
      //this.editprofileForm.get('username').setValue(this.ProfileInfo.UserEditData.name);
      this.editprofileForm.get('job').setValue(this.DefaultData.job);
      this.editprofileForm.get('pass').get('password').setValue(this.DefaultData.password); 
      console.log(this.editprofileForm.value);
   }) ;
  }

  onCancel(){
    this.editprofileForm.reset();
    //falta agregar snackbar
  }

  onSave(){
    //update information on our database
    //igual falta agregar snackbar
    let name = this.editprofileForm.get('name').value;
    let lastname = this.editprofileForm.get('lastName').value;
    let email = this.editprofileForm.get('email').value;
    let username = this.editprofileForm.get('username').value;
    let job=this.editprofileForm.get('job').value;
    let password= this.editprofileForm.get('pass').get('password').value;
    let picture = '' //picture will be defined with the observable by the time they select a different picture (if any)
    //alert("Información de perfil para mandar a la base: \n" + this.ProfileInfo.name + '\n' + this.ProfileInfo.lastName + '\n' + this.ProfileInfo.email + '\n' + this.ProfileInfo.password + '\n' + this.ProfileInfo.job);
    this.ProfileInfo.uploadToDatabase(name, lastname, email, username, job, password, picture);
    /*this.ProfileInfo.uploadToDatabase(name, lastname, email, username, job, password, picture).subscribe((data)=>{
      console.log(data);
      this.DefaultData= data;  
    });*/
    this.retrieveUserData();
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

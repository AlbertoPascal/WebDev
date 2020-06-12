import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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

  constructor(public snackBar: MatSnackBar, public ProfileInfo:ProfileEditionService) { }
    openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }

  //ProfileInfo = new ProfileEditionService();//{name:"Pedro", lastName:"Hernández", email:"pedrohdz@gmail.com", username:"PedroHdz", job:"Carpintero", password:"1234"}
  editprofileForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    salario: new FormControl(''),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    job: new FormControl(''),
  });
  ngOnInit(): void {
    this.retrieveUserData();
    console.log("loading webpage... bringing user data" + this.DefaultData);
  }
  ngOnLoad(){
    this.retrieveUserData();
    console.log("loading webpage... bringing user data" + this.DefaultData);
  }

  public async retrieveUserData(){
    var profile_user =  new ProfileData();
    let promesa = await (this.ProfileInfo.retrieveUserData());
    let promesa2 = new Promise((resolve, reject)=>{
      promesa.subscribe((data)=>{
        console.log("Ya estoy en el componente");
        console.log(data);
        profile_user.name = data.name;
        profile_user.lastName = data.lastName;
        profile_user.username = data.username;
        profile_user.job = data.job;
        profile_user.email = data.email;
        profile_user.salario = data.salario;
      })
      this.editprofileForm.get('name').setValue(profile_user.name);
      this.editprofileForm.get('lastName').setValue(profile_user.lastName);
      this.editprofileForm.get('email').setValue(profile_user.email);
      this.editprofileForm.get('job').setValue(profile_user.job);
      this.editprofileForm.get('username').setValue(profile_user.username);
      this.editprofileForm.get('salario').setValue(profile_user.salario);

    });
    
    /*this.ProfileInfo.retrieveUserData().subscribe((data)=>{
      console.log("from dataform component retrieve test4");
      console.log(data);
    })*/
   /* let a = (await this.ProfileInfo.retrieveUserData()).toPromise().then((data) =>{
      console.log("I am the new test in retrieveUserData from data.form");
      console.log(data);
      profile_user.foto = data.foto;
      profile_user.name = data.name;
      profile_user.lastName = data.lastName;
      return profile_user;
    });
    console.log("profile user vale ");
    console.log(await a);*/

    /*this.ProfileInfo.retrieveUserData().subscribe((data)=>{
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
   }) ;*/
  }

  onCancel(){
    this.editprofileForm.reset();
    //falta agregar snackbar
  }

  public async onSave(){
    //update information on our database
    //igual falta agregar snackbar
    let name = this.editprofileForm.get('name').value;
    let lastname = this.editprofileForm.get('lastName').value;
    let email = this.editprofileForm.get('email').value;
    let username = this.editprofileForm.get('username').value;
    let job=this.editprofileForm.get('job').value;
    let salario = this.editprofileForm.get('salario').value;

    if(name==""){
      alert("Ingresa un nombre!");
    }
    else if(lastname==""){
      alert("Ingresa un apellido!");
    }
    else if(email==""){
      alert("Ingresa un email!");
    }
    else if(username==""){
      alert("Ingresa un nombre de usuario!");
    }

    else{
      await this.ProfileInfo.uploadToDatabase(name, lastname, email, username, job, salario);
      window.location.reload();
    }
    //let password= this.editprofileForm.get('pass').get('password').value;
    //let picture = '' //picture will be defined with the observable by the time they select a different picture (if any)
    //alert("Información de perfil para mandar a la base: \n" + this.ProfileInfo.name + '\n' + this.ProfileInfo.lastName + '\n' + this.ProfileInfo.email + '\n' + this.ProfileInfo.password + '\n' + this.ProfileInfo.job);
    /*this.ProfileInfo.uploadToDatabase(name, lastname, email, username, job, password, picture).subscribe((data)=>{
      console.log(data);
      this.DefaultData= data;  
    });*/
   
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

import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
//import {SessionData} from '../models/session-data.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {UserInfoService} from '../services/user-info.service';
@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
  //Animaciones de angular
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class SignupModalComponent implements OnInit {

  constructor(public router: Router, public modalRef: BsModalRef) { }

  ngOnInit(): void {

  }
  newUser = new UserInfoService;
  //Form group for sign up
 /* signup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password_conf: new FormControl(''),
    email: new FormControl('')
  });*/

  signup = new FormGroup({
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

  //If the user clicks on sign up
  onSignUp(){
    let conf_pass = this.signup.get('pass').get('ConfirmPass').value;
    let pass =this.signup.get('email').value;

    //Verify data before trying to sign up
    if (this.newUser.User.password == conf_pass)
    {

        //means both passwords were typed in correctly. I can assign all data to my service
        alert("Both passwords match. Proceeding with sign up validation");
        this.newUser.User.setName(this.signup.get('name').value, this.signup.get('lastName').value);
        this.newUser.User.setJob(this.signup.get('job').value);
        this.newUser.User.setUsername(this.signup.get('username').value);
        this.newUser.User.setPassword(this.signup.get('pass').get('password').value);
        this.newUser.User.setPassword(pass);
        if(this.newUser.userSignUp()){
          alert("Successfully registered " + this.newUser.User.username + " as new user!");
          this.modalRef.hide();
          this.router.navigateByUrl('profile/user')
        }
        else{
          alert("Error! There is already a user registered user with this information. Please try with a different user and/or email");
          this.signup.get('pass').reset();
          //this.signup.get('password_conf').reset();
        }
    }
    else
    {
      alert("Passwords do not match! Please verify");
      this.signup.get('pass').reset();
     // this.signup.get('password_conf').reset();
    }
    /*if (username === 'value' && password === ' value'){
      this.router.navigate(['profile/user']);
    }*/

   
  }

}

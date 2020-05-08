import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
import {SessionData} from '../models/session-data.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  newUser = new SessionData;
  //Form group for sign up
  signup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password_conf: new FormControl(''),
    email: new FormControl('')
  });

  //If the user clicks on sign up
  onSignUp(){
    this.newUser.username = this.signup.get('username').value;
    this.newUser.password = this.signup.get('password').value;
    let conf_pass = this.signup.get('password_conf').value;
    this.newUser.email = this.signup.get('email').value;

    //Verify data before trying to sign up
    if (this.newUser.password == conf_pass)
    {
        //means both passwords were typed in correctly
        alert("Both passwords match. Proceeding with sign up validation");
        if(this.newUser.userSignUp()){
          alert("Successfully registered " + this.newUser.username + " as new user!");
          this.modalRef.hide();
          this.router.navigateByUrl('profile/user')
        }
        else{
          alert("Error! There is already a user registered user with this information. Please try with a different user and/or email");
          this.signup.get('password').reset();
          this.signup.get('password_conf').reset();
        }
    }
    else
    {
      alert("Passwords do not match! Please verify");
      this.signup.get('password').reset();
      this.signup.get('password_conf').reset();
    }
    /*if (username === 'value' && password === ' value'){
      this.router.navigate(['profile/user']);
    }*/

   
  }

}

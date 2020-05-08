import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
import {SessionData} from '../models/session-data.model';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
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
export class LoginModalComponent implements OnInit {

  constructor(public router: Router, public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }
    existingUser = new SessionData;
    //Form group for sign up
    login = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  
    //If the user clicks on sign up
    onLogin(){
      this.existingUser.username = this.login.get('username').value;
      let password:string = this.login.get('password').value;
      
      if(this.existingUser.validateSignIn(password))
      {
        alert("Credentials were entered correctly. Now logging in...");
        this.modalRef.hide();
        this.router.navigateByUrl('profile/user')
      }
      else{
        alert("Username or password is not correct. Please try again");
        this.login.reset();
      }
  
      //Verify username and password
      /*if (username === 'value' && password === ' value'){
        this.router.navigate(['profile/user']);
      }*/
  
      
    }
}

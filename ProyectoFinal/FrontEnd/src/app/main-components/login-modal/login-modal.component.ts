import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
//import {SessionData} from '../models/session-data.model';
import {UserInfoService} from '../services/user-info.service';


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
  //existingUser = new UserInfoService();
  mySubscription: any;
  ngOnInit(): void {
  }
    //this.existingUser = new UserInfoService;
    //Form group for sign up
    login = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  
    //If the user clicks on sign up
    onLogin(){
     // this.existingUser.User.setuserAuth(this.login.get('username').value);
      let password:string = this.login.get('password').value;
      this.ValidatePassword(password);
      
      //Verify username and password
      /*if (username === 'value' && password === ' value'){
        this.router.navigate(['profile/user']);
      }*/
  
      
    }
    public ValidatePassword(pass:string){
      //this.this.existingUser.User.setPassword('testing pass'); This was for testing purposes. Password should stay as read form TB
  /*    alert("my password was " + this.existingUser.User.password);
      //this.existingUser.retrievePassword();
      alert("my password is now " + this.existingUser.User.password);
      
      if(pass == this.existingUser.User.password)
      {
        alert("Credentials were entered correctly. Now logging in with..." + this.existingUser.User.username);
        localStorage.setItem('active_user', JSON.stringify(this.existingUser.User));
        if(this.existingUser.User.username == 'kamiloca')
        {
          localStorage.setItem('user_type', 'admin');
          this.router.navigateByUrl('profile/admin').then(()=>{
            window.location.reload();
          }
          );
        }
        else
        {
          localStorage.setItem('user_type', 'regular');
          this.router.navigateByUrl('profile/user').then(()=>{
            window.location.reload();
          }
          );
        }
        
        
       
        
        //window.location.reload()
        
        
        
      }
      
      else{
        alert("Username or password is not correct. Please try again");   
        this.login.reset();
      }
      this.existingUser.ResetPassword();
    }*/
    this.modalRef.hide();
  }
}


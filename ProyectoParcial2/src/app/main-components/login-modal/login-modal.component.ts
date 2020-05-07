import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';

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

    //Form group for sign up
    login = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  
    //If the user clicks on sign up
    onLogin(){
      let username = this.login.get('username').value;
      let password = this.login.get('password').value;
  
      //Verify username and password
      /*if (username === 'value' && password === ' value'){
        this.router.navigate(['profile/user']);
      }*/
  
      this.modalRef.hide();
      this.router.navigateByUrl('profile/user')
    }
}

import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from '@angular/animations';
import { BsModalRef } from 'ngx-bootstrap/modal';  
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';

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

  //Form group for sign up
  signup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password_conf: new FormControl(''),
    email: new FormControl('')
  });

  //If the user clicks on sign up
  onSignUp(){
    let username = this.signup.get('username').value;
    let password = this.signup.get('password').value;
    let password_conf = this.signup.get('password_conf').value;
    let email = this.signup.get('email').value;

    //Verify data
    /*if (username === 'value' && password === ' value'){
      this.router.navigate(['profile/user']);
    }*/

    this.modalRef.hide();
    this.router.navigateByUrl('profile/user')
  }

}

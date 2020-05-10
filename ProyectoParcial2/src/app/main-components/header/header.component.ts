import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalComponent} from '../signup-modal/signup-modal.component';
import { LoginModalComponent} from '../login-modal/login-modal.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        //opacity: 0
        color:  'green',
        transform: 'scale(1)',
        
      })),
      state('final', style({
        //opacity: 1
        color: 'pink',
        transform: 'scale(1.9)',
        
      })),
      transition('initial=>final', animate('2500ms')),
      transition('final=>initial', animate('2000ms'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  //modal
  modal : BsModalRef;

  constructor(public router: Router, private modalService: BsModalService) { 

  }

  @Input() navbar_type;
  
  ngOnInit(): void {
  }

  public openSignupModal() {
    this.modal = this.modalService.show(SignupModalComponent);
  }

  public openLoginModal() {
    this.modal = this.modalService.show(LoginModalComponent);
  }
  currentState = 'initial';
  times = 5;
  counter = 0;

  onDone($event) {
    if (this.counter < this.times) {
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
      this.counter = 0;
    }
  }
}

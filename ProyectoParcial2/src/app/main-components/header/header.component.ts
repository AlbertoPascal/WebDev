import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalComponent} from '../signup-modal/signup-modal.component';
import { LoginModalComponent} from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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








}

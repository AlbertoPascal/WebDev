import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalComponent} from '../signup-modal/signup-modal.component';
import { LoginModalComponent} from '../login-modal/login-modal.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService} from 'src/app/services/auth.service';
import {UserInfoService} from  '../services/user-info.service';
@Component({
 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        //opacity: 0
        color:  'green',
        transform: 'scale({{low_scale}})',
        
      }), {params: {low_scale: 1}}), 
      state('final', style({
        //opacity: 1
        color: 'pink',

        transform: 'scale({{high_scale}})',
        
      }), {params: {high_scale: 1.3}}),
      transition('initial=>final', animate('2500ms')),
      transition('final=>initial', animate('2000ms'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  //modal
  endpoint = 'http://localhost:8080/api/User';

  modal : BsModalRef;
  public user_type = localStorage.getItem('user_type');
  public active_user_info = JSON.parse(localStorage.getItem('active_user'));
  

  constructor(public router: Router, private modalService: BsModalService, public auth: AuthService, public db_user:UserInfoService) { }

  @Input() navbar_type;
  
  ngOnInit(): void {
    console.log(this.active_user_info);
    console.log("my user type is " + this.user_type);

  }
  public login(){
    this.auth.login();
  }
  public logOut(){
    this.auth.logout();
    localStorage.removeItem('active_user');
    localStorage.removeItem('user_type');
  }
  private extractJson(userinfo:JSON)
  {

  }
  public check_admin(){
  
      //let user = new SessionData();
      //let db_user = new UserInfoService();

        this.auth.getUser$().subscribe((data)=>{
          console.log("yo soy el data" + data.given_name);

          this.db_user.testFunc(data.given_name, data.family_name, data.picture, data.sub, data.email);
          /*user.name = data.given_name;
          user.lastName = data.family_name;
          user.profilePic = data.picture;
          user.user_auth_id =data.sub;
          user.email = data.email;*/
        })
        ;
       /* console.log("yo soy el objeto");
        console.log(user);
        console.log("me voy del header");
        db_user.testFunc(user);*/
        //alert(authdata.given_name);
        
        
      //this.extractJson(user_json.value);
      //alert(user_json);
      //console.log(JSON.stringify(user_json));
      
    
    
    
    return true;
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

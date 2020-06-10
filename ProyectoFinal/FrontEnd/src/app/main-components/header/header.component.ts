import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService} from 'src/app/services/auth.service';
import {UserInfoService} from  '../../services/user-info.service'
import { SelectMultipleControlValueAccessor } from '@angular/forms';

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

  constructor(public router: Router, public auth: AuthService, public db_user:UserInfoService) { }

  isAdmin: boolean = false;

  @Input() navbar_type;
  
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.register_user();
    this.check_admin();
  }
  
  public check_admin(){

    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){
        let subscription2 = this.db_user.getUser(data.sub).subscribe((data2)=>{
          this.isAdmin = data2[0].isAdmin;
          console.log("User admin: "+ this.isAdmin);
          subscription2.unsubscribe();
        })
      }

      subscription.unsubscribe();
      return;
    });
  }


  public register_user(){

    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data)
        this.db_user.registerUser(data.given_name, data.family_name, data.picture, data.sub, data.email);
      
      //Si no hay ninguna sesión activa, se termina la función
      subscription.unsubscribe();
      return;
    });   
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

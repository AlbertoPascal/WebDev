import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.scss']
})
export class ProfileTabsComponent implements OnInit {

  constructor(public router: Router) { }
  public user_type= localStorage.getItem('user_type');
  ngOnLoad(){
    
  }
  ngOnInit(): void {
  }

}

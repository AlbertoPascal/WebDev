import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  @Input() navbar_type;
  
  test_var:boolean=true;
  
  ngOnInit(): void {
  }
  public setTestVar(value:boolean){
      this.test_var = value;
  }

}

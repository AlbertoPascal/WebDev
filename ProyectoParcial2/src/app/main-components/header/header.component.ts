import { Component, OnInit, Input } from '@angular/core';
import * as Globals from '../../app.module';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() navbar_type;
  
  test_var:boolean=Globals.test_var;
  
  ngOnInit(): void {
  }
  public setTestVar(value:boolean){
      this.test_var = value;
  }

}

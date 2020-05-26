import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal.service';
//import { GoalData} from '../..'
@Component({
  selector: 'app-ahorros-obj',
  templateUrl: './ahorros-obj.component.html',
  styleUrls: ['./ahorros-obj.component.scss']
})
export class AhorrosObjComponent implements OnInit {

  constructor( public currentObj:GoalService) { 
    currentObj.getObj();
    
  }




  ngOnInit(): void {
  }

}

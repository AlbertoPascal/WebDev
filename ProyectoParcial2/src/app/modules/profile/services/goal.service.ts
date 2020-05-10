import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { GoalData } from '../models/goal-data.model';
@Injectable({
  providedIn: 'root'
})
export class GoalService {

  objective = new GoalData();

  getObj():Observable<GoalData>
  {
    let mainObj = "../../assets/images/switch.jpg";
    let mainPrice = 5000;

    this.objective.setImg(mainObj);
    this.objective.setPrice(mainPrice);

    console.log(this.objective);
    
    return of (this.objective);
  }

  constructor() { }
}

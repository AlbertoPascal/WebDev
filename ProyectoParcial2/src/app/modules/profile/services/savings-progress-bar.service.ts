import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { SavingsProgressBarData } from '../models/savings-progress-bar-data.model';
import { SaveDataModel } from '../models/save-data-model.model';
import { MoneyManagerService } from '../services/money-manager.service';
@Injectable({
  providedIn: 'root'
})
export class SavingsProgressBarService {

  public savings= new SavingsProgressBarData();
  public callSavings= new SaveDataModel();
  
  getSavings():Observable<SavingsProgressBarData>{
    //Temporal becuase the value doesn't exist
    let savingValue=100;
    //let savingValue=this.callSavings.total_savings;
    this.savings.setSavings(savingValue);
    
    console.log("money saves: " + this.savings);
    
    return of (this.savings);
  }
  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal.service';
import { SavingsProgressBarService } from '../../services/savings-progress-bar.service';
import {MoneyManagerService} from '../../services/money-manager.service';
@Component({
  selector: 'app-profile-progressbar',
  templateUrl: './profile-progressbar.component.html',
  styleUrls: ['./profile-progressbar.component.scss']
})
export class ProfileProgressbarComponent implements OnInit {

  constructor(public currentObj:GoalService , public currentSavings:SavingsProgressBarService) { 
    currentObj.getObj();
    currentSavings.getSavings();
  }

  ngOnInit(): void {
  }

}

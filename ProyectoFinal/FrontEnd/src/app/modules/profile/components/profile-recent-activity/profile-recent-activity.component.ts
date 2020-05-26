import { Component, OnInit } from '@angular/core';
import { RecentactivityData } from '../../models/recentactivity-data.model';
import { RecentactivityService } from '../../services/recentactivity.service';

@Component({
  selector: 'app-profile-recent-activity',
  templateUrl: './profile-recent-activity.component.html',
  styleUrls: ['./profile-recent-activity.component.scss']
})
export class ProfileRecentActivityComponent implements OnInit {

  recentActivity: RecentactivityData;

  constructor(public recentActivityService:RecentactivityService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.recentActivityService.getRecentActivity().subscribe((data)=>{
      console.log(data);
      this.recentActivity= data;
   }) 
  }

}

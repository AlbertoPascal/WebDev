import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { RecentactivityData } from '../models/recentactivity-data.model';

@Injectable({
  providedIn: 'root'
})
export class RecentactivityService {

  getRecentActivity():Observable<RecentactivityData>{
    let recentactivity:RecentactivityData = new RecentactivityData(1500, 10000, 200, 500, "Fam");

    return of(recentactivity);
  }
  constructor() { }
}

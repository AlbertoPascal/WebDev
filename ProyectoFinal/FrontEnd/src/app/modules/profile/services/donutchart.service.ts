import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {DonutchartData} from '../models/donutchart-data.model';
import { UserInfoService} from 'src/app/services/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class DonutchartService {

  donutchart:DonutchartData;

  constructor(public userInfoService:UserInfoService) { }

  getDonutChartData(user_auth_id:string):Observable<DonutchartData>{

    var ingresos:number=0;
    var gastos:number=0;

    let subscription2 =this.userInfoService.getUser(user_auth_id).subscribe((user)=>{

      ingresos = user[0].savings;
      gastos = user[0].expenses;

      this.donutchart = new DonutchartData(ingresos,gastos);
      subscription2.unsubscribe();
    }) 

    
    
    return of(this.donutchart);
  }
}

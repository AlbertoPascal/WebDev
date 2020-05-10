import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {DonutchartData} from '../models/donutchart-data.model';

@Injectable({
  providedIn: 'root'
})
export class DonutchartService {

  donutchart:DonutchartData;

  constructor() { }

  getDonutChartData():Observable<DonutchartData>{
    this.donutchart = new DonutchartData(2000,1500);
    return of(this.donutchart);
  }
}

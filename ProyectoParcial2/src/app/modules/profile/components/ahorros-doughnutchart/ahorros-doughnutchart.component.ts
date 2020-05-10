import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';
import {DonutchartService} from '../../services/donutchart.service';

@Component({
  selector: 'app-ahorros-doughnutchart',
  templateUrl: './ahorros-doughnutchart.component.html',
  styleUrls: ['./ahorros-doughnutchart.component.scss']
})
export class AhorrosDoughnutchartComponent implements OnInit {

  constructor(private donutchartService:DonutchartService) { }

  ngOnInit(): void {
    this.getDonutChartData();
  }



  public doughnutChartLabels: Label[] = ['Ingresos', 'Gastos'];
  public doughnutChartData: number[]= [10,10];

  getDonutChartData(){
    this.donutchartService.getDonutChartData().subscribe((data)=>{
      console.log(data);
      this.doughnutChartData[0]=data.ingresos;  
      this.doughnutChartData[1]=data.gastos;  
   }) 
  }

  /*public doughnutChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
    }
  ];*/

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

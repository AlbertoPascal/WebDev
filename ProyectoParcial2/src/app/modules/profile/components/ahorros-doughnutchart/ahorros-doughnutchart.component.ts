import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-ahorros-doughnutchart',
  templateUrl: './ahorros-doughnutchart.component.html',
  styleUrls: ['./ahorros-doughnutchart.component.scss']
})
export class AhorrosDoughnutchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartLabels: Label[] = ['Renta', 'Electricidad', 'Gas', 'Internet + cable', 'Agua', 'Otros gastos', 'Dinero sobrante'];
  public doughnutChartData: MultiDataSet = [
    [2000, 500, 200, 500, 300, 1000, 3000],
    [2500, 550, 220, 530, 350, 1150, 3000]
  ];

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

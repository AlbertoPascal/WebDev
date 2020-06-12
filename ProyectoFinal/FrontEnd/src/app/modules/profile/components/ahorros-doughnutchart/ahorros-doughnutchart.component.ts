import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';
import { AuthService} from 'src/app/services/auth.service';
import { UserInfoService} from 'src/app/services/user-info.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ahorros-doughnutchart',
  templateUrl: './ahorros-doughnutchart.component.html',
  styleUrls: ['./ahorros-doughnutchart.component.scss']
})
export class AhorrosDoughnutchartComponent implements OnInit {

  @ViewChild(BaseChartDirective) 
  chart: BaseChartDirective;

  constructor(public auth:AuthService, public userInfoService:UserInfoService) { }

  ngOnInit(): void {

    this.getDonutChartData();
    
  }

  public doughnutChartLabels: Label[] = ['Ahorros', 'Gastos'];
  public doughnutChartData: number[]= [1,1];


  getDonutChartData(){
    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        let subscription2 =this.userInfoService.getUser(data.sub).subscribe((user)=>{
    
          this.doughnutChartData[0] = user[0].savings;
          this.doughnutChartData[1]= user[0].expenses;  
          this.chart.chart.update();
          subscription2.unsubscribe();
        }) 
      }

      else{
        alert("Error 403");
        window.location.href = "/home";
      }

      subscription.unsubscribe();
    });
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

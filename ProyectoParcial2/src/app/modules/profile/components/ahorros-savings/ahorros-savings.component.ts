import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-ahorros-savings',
  templateUrl: './ahorros-savings.component.html',
  styleUrls: ['./ahorros-savings.component.scss']
})
export class AhorrosSavingsComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }

  addSavings = new FormGroup({
    savings: new FormControl(''),
  });

  onAdd(){
    this.addSavings.reset();
  }
  
  ngOnInit(): void {
  }

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [300, 500, 100];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

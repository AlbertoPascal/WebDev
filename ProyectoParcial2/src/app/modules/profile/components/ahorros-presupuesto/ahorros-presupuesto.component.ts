import { Component, OnInit } from '@angular/core';
import {SaveDataModel} from '../../models/save-data-model.model';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ahorros-presupuesto',
  templateUrl: './ahorros-presupuesto.component.html',
  styleUrls: ['./ahorros-presupuesto.component.scss']
})
export class AhorrosPresupuestoComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }
  prep_savings = new SaveDataModel;
  addCosts = new FormGroup({
    costs: new FormControl(''),
  });

  onCost(){
    this.prep_savings.addCosts(this.addCosts.get('costs').value);
    alert("Sent " + this.addCosts.get('costs').value + " to save");
    this.addCosts.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import {SaveDataModel} from '../../models/save-data-model.model';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MoneyManagerService} from '../../services/money-manager.service';
@Component({
  selector: 'app-ahorros-presupuesto',
  templateUrl: './ahorros-presupuesto.component.html',
  styleUrls: ['./ahorros-presupuesto.component.scss']
})
export class AhorrosPresupuestoComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public prep_savings:MoneyManagerService) { }

  ngOnInit(): void {
  }
  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }
  //prep_savings = new MoneyManagerService;
  addCosts = new FormGroup({
    costs: new FormControl(''),
    description: new FormControl('')
  });

  onCost(){
    this.prep_savings.updateSavings('cost', this.addCosts.get('costs').value,this.addCosts.get('description').value );
    
    //this.prep_savings.Operation.addCosts(this.addCosts.get('costs').value);
    //this.prep_savings.Operation.motif = this.addCosts.get('description').value;
    alert("Sent " + this.addCosts.get('costs').value + " to add to costs with reason: \n" + this.prep_savings.Operation.motif);
    this.addCosts.reset();
  }

}

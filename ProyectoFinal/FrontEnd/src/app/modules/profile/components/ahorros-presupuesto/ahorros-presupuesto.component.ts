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
  transactions = ['Expense','Saving']
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
    transaction_type: new FormControl(''),
    quantity: new FormControl(''),
    description: new FormControl(''),

  });

  changeTransaction(e) {
    this.addCosts.get('transaction_type').setValue(e.target.value, {
      onlySelf: true
    })
  }

  onCost(){

    this.prep_savings.updateSavings(/*'Cost'*/this.addCosts.get('transaction_type').value, this.addCosts.get('quantity').value,this.addCosts.get('description').value  );
  
    //this.prep_savings.Operation.addCosts(this.addCosts.get('costs').value);
    //this.prep_savings.Operation.motif = this.addCosts.get('description').value;
    console.log("Sent " + this.addCosts.get('quantity').value + " to add to costs with reason: \n" + this.addCosts.get('description').value);
  

    this.addCosts.reset();
  }

}

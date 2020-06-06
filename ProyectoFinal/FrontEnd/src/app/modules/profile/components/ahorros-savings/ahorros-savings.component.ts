import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SaveDataModel} from '../../models/save-data-model.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MoneyManagerService } from '../../services/money-manager.service';
@Component({
  selector: 'app-ahorros-savings',
  templateUrl: './ahorros-savings.component.html',
  styleUrls: ['./ahorros-savings.component.scss']
})
export class AhorrosSavingsComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public prep_savings:MoneyManagerService) { }

  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }
  //prep_savings = new MoneyManagerService;
  addSavings = new FormGroup({
    savings: new FormControl(''),
  });

  onAdd(){
    console.log("on ahorros-saving quantity is : " + this.addSavings.get('savings').value );
    this.prep_savings.updateSavings('saving', this.addSavings.get('savings').value,'N/A' );
    //this.prep_savings.Operation.AddSavings(this.addSavings.get('savings').value);
    alert("Sent " + this.addSavings.get('savings').value + " to save");
    this.addSavings.reset();
  }
  
  ngOnInit(): void {
  }

}

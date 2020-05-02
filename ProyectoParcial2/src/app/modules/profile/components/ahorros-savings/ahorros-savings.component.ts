import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

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

  savings = new FormControl('');

  onAdd(){
    this.savings.reset();
  }
  
  ngOnInit(): void {
  }

}

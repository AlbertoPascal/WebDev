import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {

  @Input() curr_prod ;
 
  constructor(public snackBar: MatSnackBar){}

  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("La acción de la snackbar fue activada");
    })
  }

  ngOnInit(): void {
  }

}

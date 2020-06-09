import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import {ProductosService} from '../../services/productos.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {

  @Input() curr_prod ;
 
  constructor(public snackBar: MatSnackBar, public productosService: ProductosService){}

  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
      }, 2000);
    });
  }

  //Snackbar que se activa cuando el usuario da click en "Agregar a la wishlist"
  async snackbarWishlist(message, action){

    var add = true;

    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});
  
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("Acción cancelada con éxito");
      add=false;
      return;
    })

    snackBarRef.afterDismissed().subscribe(()=>{
      if(add){
        //El producto se agrega a la wishlist del usuario
        this.productosService.addToWishlist(this.curr_prod.titulo, this.curr_prod.foto, this.curr_prod.precio);
      }
    });
  }

  ngOnInit(): void {
  }

}

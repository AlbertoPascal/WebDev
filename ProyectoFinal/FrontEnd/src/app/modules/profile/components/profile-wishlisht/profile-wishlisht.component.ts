import { Component, OnInit } from '@angular/core';
import { WishlistProductData } from '../../models/wishlist-product-data.model';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService} from 'src/app/services/auth.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-wishlisht',
  templateUrl: './profile-wishlisht.component.html',
  styleUrls: ['./profile-wishlisht.component.scss']
})
export class ProfileWishlishtComponent implements OnInit {

  wishlistProducts: WishlistProductData[] = [];
  product: WishlistProductData;
  empty=false;

  constructor(public wishlistService:WishlistService, public auth: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){

    let subscription = this.auth.getUser$().subscribe((data)=>{

      if(data){

        this.wishlistService.getWishlistProducts(data.sub).subscribe((wishlist)=>{

          //Longitud del arreglo de resultados
          var len = Object.keys(wishlist[0].Objects).length;
          
          //Si la wishlist está vacía 
          if(len<=0){
            this.empty=true;
          }

          for(var i = 0; i<len; i++ ){
            this.product = new WishlistProductData(wishlist[0].Objects[i].titulo, wishlist[0].Objects[i].foto, wishlist[0].Objects[i].precio, i);
            this.wishlistProducts.push(this.product);
          }

        }) 

      }
      else{
        alert("Error 403");
        window.location.href = "/home";
      }

      subscription.unsubscribe();
    });
  }

  async deleteItem(prod:WishlistProductData){
    
    var deleteItem = true;

    let snackBarRef = this.snackBar.open("Producto borrado de la wishlist", "Deshacer", {duration: 1000});
    
    //Cuando el usuario de click en la acción de "deshacer" del snackbar
    snackBarRef.onAction().subscribe(()=> {
      console.log("Acción cancelada con éxito");
      deleteItem=false;
      return;
    })

    snackBarRef.afterDismissed().subscribe(()=>{
      if(deleteItem){

        let subscription = this.auth.getUser$().subscribe((data)=>{

          if(data){
            this.wishlistService.deleteItem(data.sub, prod.posicion).subscribe((wishlist)=>{
              console.log(wishlist);
              window.location.href = window.location.href;
            }) 
          }
          else{
            alert("Error: Los datos del usuario no fueron encontrados")
          }

          subscription.unsubscribe();
        });
      }
    });
  }

}

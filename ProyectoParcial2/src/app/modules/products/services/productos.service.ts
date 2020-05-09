import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { ProductoData } from '../models/producto-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  getProductos():Observable<ProductoData[]>{
    let productos:ProductoData[] = [
      new ProductoData("Jeans", "../../assets/images/jeans.jpg", 400),
      new ProductoData("Camisa", "../../assets/images/flannel.jpg", 350),
      new ProductoData("Playera gris", "../../assets/images/tshirt.jpg", 250),
      new ProductoData("Playera negra", "../../assets/images/black_tshirt.jpg", 250)
    ];

    return of(productos);
  }

    /*{titulo:"Jeans", foto:"../../assets/images/jeans.jpg", price:400},
    {titulo:"Camisa", foto:"../../assets/images/flannel.jpg", price:350},
    {titulo:"Playera gris", foto:"../../assets/images/tshirt.jpg", price:250},
    {titulo:"Playera negra", foto:"../../assets/images/black_tshirt.jpg", price:250}*/
    
  constructor() { }
}

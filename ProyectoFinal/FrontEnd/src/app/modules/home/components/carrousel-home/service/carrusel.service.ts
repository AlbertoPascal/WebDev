import { Injectable, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import {CarruselModel } from '../models/carrusel-model.model';
//import { lookup } from 'dns';
import { ObserversModule } from '@angular/cdk/observers';
@Injectable({

  providedIn: 'root'
})
export class CarruselService {

  getImages(): Observable<CarruselModel[]>{
    let allImages: CarruselModel[]  = [
      new CarruselModel("https://i.imgur.com/NZh0I3V.jpg"),
      new CarruselModel ("https://i.imgur.com/CWHYRvi.jpg"),
      new CarruselModel ("https://i.imgur.com/INc384z.jpg")
    ];
    return of(allImages);
  }  
    constructor(){ }

}
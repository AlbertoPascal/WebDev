import { Component, OnInit } from '@angular/core';
import {CarruselService} from './service/carrusel.service';
import {CarruselModel } from './models/carrusel-model.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrls: ['./carrousel-home.component.scss'],
})
export class CarrouselHomeComponent  implements OnInit  {

  //randImg: Observable<any>;
  //imgInfo: any;
  //imgHis:any[];
  //images:any[];        
  allImages:CarruselModel[];    
  
  images = ["/assets/images/recomendation1.png", "/assets/images/recomendation2.png", "/assets/images/recomendation3.png"];
  constructor(private carruselService: CarruselService) {    
    //this.allImages = this.carruselService.getImages();    
  }    
  ngOnInit() {    
    this.getImages();
    //this.allImages = this.carruselService.getImages();    
  } 
  getImages(){
    this.carruselService.getImages().subscribe((data)=> {
      this.allImages=data;
    })
  }   

}


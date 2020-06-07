import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarrouselHomeComponent } from './components/carrousel-home/carrousel-home.component';
import { IntroBlockComponent } from './components/intro-block/intro-block.component';
import { SearchbarComponent } from '../../main-components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { SearchbarComponent } from '../../main-components/searchbar/searchbar.component';

@NgModule({
  declarations: [HomepageComponent, CarrouselHomeComponent, IntroBlockComponent, SearchbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[SearchbarComponent]
})
export class HomeModule { }

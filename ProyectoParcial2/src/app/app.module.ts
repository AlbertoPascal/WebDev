import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { SearchbarComponent } from './main-components/searchbar/searchbar.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';
import { ProfileModule } from './modules/profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    ProfileModule
  ],
  exports: [SearchbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

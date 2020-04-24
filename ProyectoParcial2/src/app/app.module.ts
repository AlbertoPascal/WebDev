import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs.component';
import { ProfileRecentActivityComponent } from './profile-recent-activity/profile-recent-activity.component';
import { ProfileWishlishtComponent } from './profile-wishlisht/profile-wishlisht.component';
import { ProfileProgressbarComponent } from './profile-progressbar/profile-progressbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProfileadminAddMemberComponent } from './profileadmin-add-member/profileadmin-add-member.component';
import { ProfileadminMemberTableComponent } from './profileadmin-member-table/profileadmin-member-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    ProductCardComponent,
    CarrouselHomeComponent,
    IntroBlockComponent,
    PerfilUsuarioComponent,
    ProfilePicComponent,
    ProfileTabsComponent,
    ProfileRecentActivityComponent,
    ProfileWishlishtComponent,
    ProfileProgressbarComponent,
    ProductosComponent,
    ProfileadminAddMemberComponent,
    ProfileadminMemberTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

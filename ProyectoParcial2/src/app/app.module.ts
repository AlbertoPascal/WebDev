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
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { DataFormComponent } from './data-form/data-form.component';
import { UserEditTabsComponent } from './user-edit-tabs/user-edit-tabs.component';
import { EditarPerfilUsrComponent } from './editar-perfil-usr/editar-perfil-usr.component';
import { EditarPerfilAdminComponent } from './editar-perfil-admin/editar-perfil-admin.component';
import { AhorrosComponent } from './ahorros/ahorros.component';
import { AhorrosObjComponent } from './ahorros-obj/ahorros-obj.component';
import { AhorrosSavingsComponent } from './ahorros-savings/ahorros-savings.component';
import { AhorrosPresupuestoComponent } from './ahorros-presupuesto/ahorros-presupuesto.component';
import { ValidacionBlockComponent } from './validacion-block/validacion-block.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { ValidacionesCssComponent } from './validaciones-css/validaciones-css.component';

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
    ProfileadminMemberTableComponent,
    PerfilAdminComponent,
    DataFormComponent,
    UserEditTabsComponent,
    EditarPerfilUsrComponent,
    EditarPerfilAdminComponent,
    AhorrosComponent,
    AhorrosObjComponent,
    AhorrosSavingsComponent,
    AhorrosPresupuestoComponent,
    ValidacionBlockComponent,
    ValidacionesComponent,
    ValidacionesCssComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

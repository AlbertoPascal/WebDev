import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { AhorrosComponent } from './components/ahorros/ahorros.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { EditarPerfilUsrComponent } from './components/editar-perfil-usr/editar-perfil-usr.component';
import { EditarPerfilAdminComponent } from './components/editar-perfil-admin/editar-perfil-admin.component';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';

import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { ProfileRecentActivityComponent } from './components/profile-recent-activity/profile-recent-activity.component';
import { ProfileWishlishtComponent } from './components/profile-wishlisht/profile-wishlisht.component';
import { ProfileProgressbarComponent } from './components/profile-progressbar/profile-progressbar.component';
import { ProfileadminAddMemberComponent } from './components/profileadmin-add-member/profileadmin-add-member.component';
import { ProfileadminMemberTableComponent } from './components/profileadmin-member-table/profileadmin-member-table.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { AhorrosObjComponent } from './components/ahorros-obj/ahorros-obj.component';
import { AhorrosSavingsComponent } from './components/ahorros-savings/ahorros-savings.component';
import { AhorrosPresupuestoComponent } from './components/ahorros-presupuesto/ahorros-presupuesto.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    ProfilePicComponent,
    ProfileTabsComponent,
    ProfileRecentActivityComponent,
    ProfileWishlishtComponent,
    ProfileProgressbarComponent,
    ProfileadminAddMemberComponent,
    ProfileadminMemberTableComponent,
    PerfilAdminComponent,
    DataFormComponent,
    EditarPerfilUsrComponent,
    EditarPerfilAdminComponent,
    AhorrosComponent,
    AhorrosObjComponent,
    AhorrosSavingsComponent,
    AhorrosPresupuestoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

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
import { AhorrosPresupuestoComponent } from './components/ahorros-presupuesto/ahorros-presupuesto.component';
import { AhorrosDoughnutchartComponent } from './components/ahorros-doughnutchart/ahorros-doughnutchart.component';
import {MatSelectModule} from '@angular/material/select';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
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
    AhorrosPresupuestoComponent,
    AhorrosDoughnutchartComponent,
    FlipCardComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    ChartsModule,
    MatSelectModule
  ]
})
export class ProfileModule { }

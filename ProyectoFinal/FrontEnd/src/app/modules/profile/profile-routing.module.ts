import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { EditarPerfilUsrComponent } from './components/editar-perfil-usr/editar-perfil-usr.component';
import { EditarPerfilAdminComponent } from './components/editar-perfil-admin/editar-perfil-admin.component';
import { AhorrosComponent } from './components/ahorros/ahorros.component';
import {AdminGuard} from 'src/app/guards/admin.guard';

const routes: Routes = [
  {path: 'admin', component : PerfilAdminComponent},
  {path: 'user', component : PerfilUsuarioComponent},
  {path: 'edit-user', component : EditarPerfilUsrComponent},
  {path: 'edit-admin', component : EditarPerfilAdminComponent},
  {path: 'savings', component : AhorrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

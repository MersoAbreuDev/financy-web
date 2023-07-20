import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';

const routes: Routes = [
  {
    path:"",
    component:UsuarioComponent
  },
  {
    path:"usuarios-consulta",
    component:UsuarioConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

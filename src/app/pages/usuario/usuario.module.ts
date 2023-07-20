import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioConsultaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ComponeteModule
  ]
})
export class UsuarioModule { }

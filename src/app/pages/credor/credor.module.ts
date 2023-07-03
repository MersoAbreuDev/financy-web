import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredorRoutingModule } from './credor-routing.module';
import { CredorComponent } from './credor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';
import { CredorConsultaComponent } from './credor-consulta/credor-consulta.component';


@NgModule({
  declarations: [
    CredorComponent,
    CredorConsultaComponent
  ],
  imports: [
    CommonModule,
    CredorRoutingModule,
    ReactiveFormsModule,
    ComponeteModule,
    FormsModule
]
})
export class CredorModule { }

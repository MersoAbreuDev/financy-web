import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsavelRoutingModule } from './responsavel-routing.module';
import { ResponsavelComponent } from './responsavel.component';
import { ResponsavelConsultaComponent } from './responsavel-consulta/responsavel-consulta.component';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResponsavelComponent,
    ResponsavelConsultaComponent
  ],
  imports: [
    CommonModule,
    ResponsavelRoutingModule,
    ReactiveFormsModule,
    ComponeteModule,
    FormsModule
    
  ]
})
export class ResponsavelModule { }

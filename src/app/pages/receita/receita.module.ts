import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitaRoutingModule } from './receita-routing.module';
import { ReceitaComponent } from './receita.component';
import { ReceitaConsultaComponent } from './receita-consulta/receita-consulta.component';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';


@NgModule({
  declarations: [
    ReceitaComponent,
    ReceitaConsultaComponent
  ],
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    ComponeteModule
  ]
})
export class ReceitaModule { }

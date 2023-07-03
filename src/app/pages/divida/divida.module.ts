import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividaRoutingModule } from './divida-routing.module';
import { DividaComponent } from './divida.component';
import { DividaConsultaComponent } from './divida-consulta/divida-consulta.component';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DividaComponent,
    DividaConsultaComponent
  ],
  imports: [
    CommonModule,
    DividaRoutingModule,
    ReactiveFormsModule,
    ComponeteModule,
    FormsModule
    
  ]
})
export class DividaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponeteModule } from 'src/app/shared/componete/componete.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponeteModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

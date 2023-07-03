import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividaComponent } from './divida.component';
import { DividaConsultaComponent } from './divida-consulta/divida-consulta.component';

const routes: Routes = [
  {
    path:"",
    component:DividaComponent
  },
  {
    path:"divida-consulta",
    component:DividaConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividaRoutingModule { }

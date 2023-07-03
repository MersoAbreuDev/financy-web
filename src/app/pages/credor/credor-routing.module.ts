import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredorComponent } from './credor.component';
import { CredorConsultaComponent } from './credor-consulta/credor-consulta.component';

const routes: Routes = [
  {
    path:"",
    component:CredorComponent
  },
  {
    path:"credor-consulta",
    component:CredorConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredorRoutingModule { }

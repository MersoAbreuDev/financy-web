import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaComponent } from './receita.component';
import { ReceitaConsultaComponent } from './receita-consulta/receita-consulta.component';

const routes: Routes = [
  {
    path:"",
    component:ReceitaComponent
  },
  {
    path:"receita-consulta",
    component:ReceitaConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }

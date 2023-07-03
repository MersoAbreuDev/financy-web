import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsavelComponent } from './responsavel.component';
import { ResponsavelConsultaComponent } from './responsavel-consulta/responsavel-consulta.component';

const routes: Routes = [
  {
    path:"",
    component:ResponsavelComponent
  },
  {
    path:"responsaveis-consulta",
    component:ResponsavelConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsavelRoutingModule { }

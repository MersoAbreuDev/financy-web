import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: 'credor',
    loadChildren: () => import('./pages/credor/credor.module').then(m => m.CredorModule)
  },
  {
    path: 'responsavel',
    loadChildren: () => import('./pages/responsavel/responsavel.module').then(m => m.ResponsavelModule)
  },
  {
    path: 'dividas',
    loadChildren: () => import('./pages/divida/divida.module').then(m => m.DividaModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./pages/receita/receita.module').then(m => m.ReceitaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

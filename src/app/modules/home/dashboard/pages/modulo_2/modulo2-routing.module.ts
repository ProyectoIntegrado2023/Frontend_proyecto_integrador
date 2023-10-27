import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-proyecto',
    pathMatch: 'full'
  },
  {
    path: 'lista-proyecto',
    loadChildren: () => import ('./lista-proyecto/lista-proyecto.module').then(m=>m.ListaProyectoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }

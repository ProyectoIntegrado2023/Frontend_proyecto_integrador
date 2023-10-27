import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo2Component } from './modulo2.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo2Component,
    children: [
      {
        path: '',
        redirectTo: 'lista-proyecto',
        pathMatch: 'full'
      },
      {
        path: 'lista-proyecto',
        loadChildren: () => import ('./lista-proyecto/lista-proyecto.module').then(m=>m.ListaProyectoModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }

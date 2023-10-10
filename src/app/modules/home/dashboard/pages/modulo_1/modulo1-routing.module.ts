import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './modulo1.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo1Component,
    children: [
      {
        path: '',
        redirectTo: 'proyecto',
        pathMatch: 'full'
      },
      {
        path: 'plantilla',
        loadChildren: () => import('./plantilla/plantilla.module').then(m => m.PlantillaModule)
      },
      {
        path: 'proyecto',
        loadChildren: () => import('./proyecto/proyecto.module').then(m => m.ProyectoModule)
      },
      {
        path: 'agregar-proyecto',
        loadChildren: () => import('./agregar-proyecto/agregar-proyecto.module').then(m => m.AgregarProyectoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'plantilla',
    pathMatch: 'full'
  },
  {
    path: 'plantilla',
    loadChildren: () => import('./pages/plantilla/plantilla.module').then(m => m.PlantillaModule)
  },
  {
    path: 'proyecto',
    loadChildren: () => import('./pages/proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path: 'agregar-proyecto',
    loadChildren: () => import('./pages/agregar-proyecto/agregar-proyecto.module').then(m => m.AgregarProyectoModule)
  },
  {
    path: 'agregar-plantilla',
    loadChildren: () => import('./pages/agregar-plantilla/agregar-plantilla.module').then(m => m.AgregarPlantillaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule {}

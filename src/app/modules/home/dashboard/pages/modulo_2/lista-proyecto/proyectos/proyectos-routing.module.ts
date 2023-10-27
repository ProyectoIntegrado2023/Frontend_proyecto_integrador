import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosComponent,
    children: [
      {
        path: '',
        redirectTo: 'grupos',
        pathMatch: 'full'
      },
      {
        path: 'grupos',
        loadChildren:() => import('./grupos/grupos.module').then(m=>m.GruposModule)
      },
      {
        path: 'actividades',
        loadChildren: () => import('./actividad-eje/actividad-eje.module').then(m=>m.ActividadEjeModule)
      },
      {
        path: 'seguimiento',
        loadChildren: () => import('./seguimiento/seguimiento.module').then(m=>m.SeguimientoModule)
      },
      {
        path: 'asignar-horas',
        loadChildren: () => import('./asig-horas/asig-horas.module').then(m=>m.AsigHorasModule)
      },
      {
        path: 'informe-final',
        loadChildren: () => import('./inf-final/inf-final.module').then(m=>m.InfFinalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }

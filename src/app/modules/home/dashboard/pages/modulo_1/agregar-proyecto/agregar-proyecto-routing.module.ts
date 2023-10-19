import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProyectoComponent } from './agregar-proyecto.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarProyectoComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'actividad',
        loadChildren: () => import('./actividad/actividad.module').then(m => m.ActividadModule)
      },
      {
        path: 'participante',
        loadChildren: () => import('./participante/participante.module').then(m => m.ParticipanteModule)
      },
      {
        path: 'encargado',
        loadChildren: () => import('./encargado/encargado.module').then(m => m.EncargadoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarProyectoRoutingModule { }

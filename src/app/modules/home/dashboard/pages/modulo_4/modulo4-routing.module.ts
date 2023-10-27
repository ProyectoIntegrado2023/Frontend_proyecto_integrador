import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asignar-privilegios',
    pathMatch: 'full'
  },
  { 
    path: 'asignar-privilegios',
    loadChildren: () => import('./pages/asig-privi/asig-privi.module').then(m => m.AsigPriviModule)
  },
  { 
    path: 'asignar-coordinador',
    loadChildren: () => import('./pages/asig-coord/asig-coord.module').then(m => m.AsigCoordModule)
  },
  { 
    path: 'crear-roles-sistema',
    loadChildren: () => import('./pages/crear-rolsis/crear-rolsis.module').then(m => m.CrearRolsisModule)
  },
  { 
    path: 'listar-roles-sistema',
    loadChildren: () => import('./pages/list-rolsis/list-rolsis.module').then(m => m.ListRolsisModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class Modulo4RoutingModule { }

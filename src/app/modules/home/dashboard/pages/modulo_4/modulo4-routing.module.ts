import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo4Component } from './modulo4.component';
import { AsigPriviComponent } from './pages/asig-privi/asig-privi.component';
import { AsigCoordComponent } from './pages/asig-coord/asig-coord.component';
import { CrearRolsisComponent } from './pages/crear-rolsis/crear-rolsis.component';
import { ListRolsisComponent } from './pages/list-rolsis/list-rolsis.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo4Component, children: [
      { path: '', redirectTo: 'asignar-privilegios', pathMatch: 'full'},
      { path: 'asignar-privilegios', loadChildren: () => import('./pages/asig-privi/asig-privi.module').then(m => m.AsigPriviModule)},
      { path: 'asignar-coordinador', component: AsigCoordComponent},
      { path: 'crear-roles-sistema', component: CrearRolsisComponent},
      { path: 'listar-roles-sistema', component: ListRolsisComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class Modulo4RoutingModule { }

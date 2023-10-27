import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then(m => m.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }

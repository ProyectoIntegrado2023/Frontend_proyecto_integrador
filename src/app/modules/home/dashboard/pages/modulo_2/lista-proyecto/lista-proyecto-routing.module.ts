import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectoComponent } from './lista-proyecto.component';

const routes: Routes = [
  {
    path : '',
    component: ListaProyectoComponent,
    children: [
      {
        path: 'proyecto',
        loadChildren: ()=>import('./proyectos/proyectos.module').then(m=>m.ProyectosModule)
      }
          ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaProyectoRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar.component';

const routes: Routes = [
  {
    path: '',
    component: EditarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../agregar-proyecto/agregar-proyecto.module').then(m => m.AgregarProyectoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRoutingModule { }

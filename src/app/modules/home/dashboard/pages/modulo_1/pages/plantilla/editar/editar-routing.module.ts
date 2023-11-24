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
        loadChildren: () => import('../../agregar-plantilla/agregar-plantilla.module').then(m => m.AgregarPlantillaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRoutingModule { }

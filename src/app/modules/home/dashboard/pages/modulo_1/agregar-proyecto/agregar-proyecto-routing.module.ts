import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProyectoComponent } from './agregar-proyecto.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarProyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarProyectoRoutingModule { }

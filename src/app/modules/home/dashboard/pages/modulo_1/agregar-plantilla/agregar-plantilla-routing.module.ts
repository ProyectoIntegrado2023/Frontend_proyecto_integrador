import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPlantillaComponent } from './agregar-plantilla.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarPlantillaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarPlantillaRoutingModule { }

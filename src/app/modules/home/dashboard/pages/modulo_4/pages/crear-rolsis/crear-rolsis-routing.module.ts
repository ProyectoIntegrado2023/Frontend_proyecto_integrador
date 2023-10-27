import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRolsisComponent } from './crear-rolsis.component';

const routes: Routes = [
  {
    path: '',
    component: CrearRolsisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearRolsisRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerRolNegocioComponent } from './mantener-rol-negocio.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerRolNegocioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerRolNegocioRoutingModule { }

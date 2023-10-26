import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerEstadoComponent } from './mantener-estado.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerEstadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerEstadoRoutingModule { }

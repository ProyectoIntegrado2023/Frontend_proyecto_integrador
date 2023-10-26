import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerCicloComponent } from './mantener-ciclo.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerCicloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerCicloRoutingModule { }

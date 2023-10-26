import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerEscuelaComponent } from './mantener-escuela.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerEscuelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerEscuelaRoutingModule { }

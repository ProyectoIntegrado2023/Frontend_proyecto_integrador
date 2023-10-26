import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerCursoArticuladoComponent } from './mantener-curso-articulado.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerCursoArticuladoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerCursoArticuladoRoutingModule { }

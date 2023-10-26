import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerSemestreComponent } from './mantener-semestre.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerSemestreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerSemestreRoutingModule { }

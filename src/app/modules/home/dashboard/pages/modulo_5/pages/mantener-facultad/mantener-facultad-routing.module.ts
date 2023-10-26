import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerFacultadComponent } from './mantener-facultad.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerFacultadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerFacultadRoutingModule { }

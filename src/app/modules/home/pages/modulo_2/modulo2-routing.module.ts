import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo2Component } from './modulo2.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }

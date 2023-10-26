import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo4Component } from './modulo4.component';

const routes: Routes = [
  {
    path: '',
    component: Modulo4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo4RoutingModule { }

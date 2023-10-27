import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadEjeComponent } from './actividad-eje.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadEjeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActividadEjeRoutingModule { }

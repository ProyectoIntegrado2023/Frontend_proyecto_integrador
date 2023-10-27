import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguimientoComponent } from './seguimiento.component';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SeguimientoRoutingModule { }

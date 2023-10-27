import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfFinalComponent } from './inf-final.component';

const routes: Routes = [
  {
    path: '',
    component: InfFinalComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InfFinalRoutingModule { }

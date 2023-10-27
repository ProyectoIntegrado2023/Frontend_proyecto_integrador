import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsigHorasComponent } from './asig-horas.component';

const routes: Routes = [
  {
    path: '',
    component: AsigHorasComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AsigHorasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorasDetallesComponent } from './horas-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: HorasDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorasDetallesRoutingModule { }

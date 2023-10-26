import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorasComponent } from './horas/horas.component';
import { HorasDetallesComponent } from './horas-detalles/horas-detalles.component';

const routes: Routes = [
  {
    path: 'horas-detalles',
    component: HorasDetallesComponent,
  },
  {
    path: 'horas',
    component: HorasComponent,
  },
  {
    path: '',
    redirectTo: 'horas-detalles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo3RoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorasComponent } from './horas/horas.component';
import { HorasDetallesComponent } from './horas-detalles/horas-detalles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'horas-detalles',
    pathMatch: 'full',
  },
  {
    path: 'horas-detalles',
    loadChildren: () => import('./horas-detalles/horas-detalles.module').then(m => m.HorasDetallesModule)
  },
  {
    path: 'horas',
    loadChildren: () => import('./horas/horas.module').then(m => m.HorasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo3RoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '1',
        loadChildren: () => import('./pages/modulo_1/modulo1.module').then(m => m.Modulo1Module)
      },
      {
        path: '2',
        loadChildren: () => import('./pages/modulo_2/modulo2.module').then(m => m.Modulo2Module)
      },
      {
        path: '3',
        loadChildren: () => import('./pages/modulo_3/modulo3.module').then(m => m.Modulo3Module)
      },
      {
        path: '4',
        loadChildren: () => import('./pages/modulo_4/modulo4.module').then(m => m.Modulo4Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

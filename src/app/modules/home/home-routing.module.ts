import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'modulo-1',
    loadChildren: () => import('./pages/modulo_1/modulo1.module').then(m => m.Modulo1Module)
  },
  {
    path: 'modulo-2',
    loadChildren: () => import('./pages/modulo_2/modulo2.module').then(m => m.Modulo2Module)
  },
  {
    path: 'modulo-3',
    loadChildren: () => import('./pages/modulo_3/modulo3.module').then(m => m.Modulo3Module)
  },
  {
    path: 'modulo-4',
    loadChildren: () => import('./pages/modulo_4/modulo4.module').then(m => m.Modulo4Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

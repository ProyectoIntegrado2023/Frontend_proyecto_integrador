import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vigilanteHomeGuard } from './core/guards/vigilante-home.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [vigilanteHomeGuard]
  },
  {
    path: '**',
    redirectTo: 'log-in'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

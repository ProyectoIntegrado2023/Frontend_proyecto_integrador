import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerUsuarioComponent } from './mantener-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerUsuarioRoutingModule { }

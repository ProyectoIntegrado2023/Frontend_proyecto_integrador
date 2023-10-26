import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerTipoConvenioComponent } from './mantener-tipo-convenio.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerTipoConvenioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerTipoConvenioRoutingModule { }

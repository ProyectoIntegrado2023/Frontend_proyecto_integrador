import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerRolNegocioRoutingModule } from './mantener-rol-negocio-routing.module';
import { MantenerRolNegocioComponent } from './mantener-rol-negocio.component';


@NgModule({
  declarations: [
    MantenerRolNegocioComponent
  ],
  imports: [
    CommonModule,
    MantenerRolNegocioRoutingModule
  ]
})
export class MantenerRolNegocioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerRolNegocioRoutingModule } from './mantener-rol-negocio-routing.module';
import { MantenerRolNegocioComponent } from './mantener-rol-negocio.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerRolNegocioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MantenerRolNegocioRoutingModule
  ]
})
export class MantenerRolNegocioModule { }

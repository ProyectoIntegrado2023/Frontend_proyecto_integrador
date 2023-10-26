import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerCicloRoutingModule } from './mantener-ciclo-routing.module';
import { MantenerCicloComponent } from './mantener-ciclo.component';


@NgModule({
  declarations: [
    MantenerCicloComponent
  ],
  imports: [
    CommonModule,
    MantenerCicloRoutingModule
  ]
})
export class MantenerCicloModule { }

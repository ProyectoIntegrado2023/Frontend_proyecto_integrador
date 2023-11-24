import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerEstadoRoutingModule } from './mantener-estado-routing.module';
import { MantenerEstadoComponent } from './mantener-estado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerEstadoComponent
  ],
  imports: [
    CommonModule,
    MantenerEstadoRoutingModule,
    FormsModule
  ]
})
export class MantenerEstadoModule { }

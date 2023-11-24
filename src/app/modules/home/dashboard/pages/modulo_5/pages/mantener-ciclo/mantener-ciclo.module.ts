import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerCicloRoutingModule } from './mantener-ciclo-routing.module';
import { MantenerCicloComponent } from './mantener-ciclo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerCicloComponent
  ],
  imports: [
    CommonModule,
    MantenerCicloRoutingModule,
    FormsModule
  ]
})
export class MantenerCicloModule { }

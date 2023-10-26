import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncargadoRoutingModule } from './encargado-routing.module';
import { EncargadoComponent } from './encargado.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EncargadoComponent
  ],
  imports: [
    CommonModule,
    EncargadoRoutingModule,
    MatButtonModule
  ]
})
export class EncargadoModule { }

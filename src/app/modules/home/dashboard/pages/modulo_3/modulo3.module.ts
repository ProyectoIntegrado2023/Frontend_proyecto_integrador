import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo3RoutingModule } from './modulo3-routing.module';
import { Modulo3Component } from './modulo3.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HorasDetallesComponent } from './horas-detalles/horas-detalles.component';

@NgModule({
  declarations: [
    Modulo3Component,
    HorasDetallesComponent
  ],
  imports: [
    CommonModule,
    Modulo3RoutingModule,
    MatSelectModule,
    MatFormFieldModule
  ],
})
export class Modulo3Module {}

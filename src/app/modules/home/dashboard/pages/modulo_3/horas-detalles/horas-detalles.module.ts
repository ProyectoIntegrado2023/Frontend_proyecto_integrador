import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorasDetallesRoutingModule } from './horas-detalles-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HorasDetallesComponent } from './horas-detalles.component';


@NgModule({
  declarations: [
    HorasDetallesComponent
  ],
  imports: [
    CommonModule,
    HorasDetallesRoutingModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class HorasDetallesModule { }

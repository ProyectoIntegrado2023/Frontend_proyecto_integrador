import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerEscuelaRoutingModule } from './mantener-escuela-routing.module';
import { MantenerEscuelaComponent } from './mantener-escuela.component';


@NgModule({
  declarations: [
    MantenerEscuelaComponent
  ],
  imports: [
    CommonModule,
    MantenerEscuelaRoutingModule
  ]
})
export class MantenerEscuelaModule { }

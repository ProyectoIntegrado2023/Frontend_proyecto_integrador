import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerCursoArticuladoRoutingModule } from './mantener-curso-articulado-routing.module';
import { MantenerCursoArticuladoComponent } from './mantener-curso-articulado.component';


@NgModule({
  declarations: [
    MantenerCursoArticuladoComponent
  ],
  imports: [
    CommonModule,
    MantenerCursoArticuladoRoutingModule
  ]
})
export class MantenerCursoArticuladoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerCursoArticuladoRoutingModule } from './mantener-curso-articulado-routing.module';
import { MantenerCursoArticuladoComponent } from './mantener-curso-articulado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenerCursoArticuladoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MantenerCursoArticuladoRoutingModule
  ]
})
export class MantenerCursoArticuladoModule { }

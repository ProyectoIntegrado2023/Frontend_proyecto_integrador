import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerDocenteRoutingModule } from './mantener-docente-routing.module';
import { MantenerDocenteComponent } from './mantener-docente.component';


@NgModule({
  declarations: [
    MantenerDocenteComponent
  ],
  imports: [
    CommonModule,
    MantenerDocenteRoutingModule
  ]
})
export class MantenerDocenteModule { }

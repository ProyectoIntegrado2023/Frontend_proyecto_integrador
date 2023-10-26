import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    MatButtonModule
  ]
})
export class ActividadModule { }

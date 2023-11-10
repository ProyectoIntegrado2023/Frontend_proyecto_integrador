import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ActividadModule { }

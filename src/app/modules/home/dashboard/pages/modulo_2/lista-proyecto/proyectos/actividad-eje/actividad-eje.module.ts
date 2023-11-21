import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActividadEjeRoutingModule } from './actividad-eje-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ActividadEjeComponent } from './actividad-eje.component';

@NgModule({
  declarations: [
    ActividadEjeComponent,
  ],

  imports: [
    CommonModule,
    ActividadEjeRoutingModule,
    MatTableModule,
    MatButtonModule,
  ]
})

export class ActividadEjeModule { }

export class ExpansionOverviewExample {
  panelOpenState = false;
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfFinalRoutingModule } from './inf-final-routing.module';
import { InfFinalComponent } from './inf-final.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    InfFinalComponent
  ],
  imports: [
    CommonModule,
    InfFinalRoutingModule,
    MatTableModule,
  ]
})
export class InfFinalModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfFinalRoutingModule } from './inf-final-routing.module';
import { InfFinalComponent } from './inf-final.component';

import { MatTableModule } from '@angular/material/table';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';

@NgModule({
  declarations: [
    InfFinalComponent
  ],
  imports: [
    CommonModule,
    InfFinalRoutingModule,
    MatTableModule,
    DropAreaComponent
  ]
})
export class InfFinalModule { }

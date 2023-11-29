import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { SeguimientoComponent } from './seguimiento.component';

import { MatTableModule } from '@angular/material/table';
import { DropAreaComponent } from 'src/app/shared/components/drop-area/drop-area.component';

@NgModule({
  declarations: [
    SeguimientoComponent
  ],
  imports: [
    CommonModule,
    SeguimientoRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    DropAreaComponent
  ]
})
export class SeguimientoModule { }

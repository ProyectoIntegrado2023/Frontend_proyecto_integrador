import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { SeguimientoComponent } from './seguimiento.component';

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
  ]
})
export class SeguimientoModule { }

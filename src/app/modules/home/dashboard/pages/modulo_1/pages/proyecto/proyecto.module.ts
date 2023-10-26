import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyecto.component';

@NgModule({
  declarations: [
    ProyectoComponent,
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
  ]
})
export class ProyectoModule { }

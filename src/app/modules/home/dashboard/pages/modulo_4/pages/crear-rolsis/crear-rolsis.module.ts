import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearRolsisRoutingModule } from './crear-rolsis-routing.module';
import { CrearRolsisComponent } from './crear-rolsis.component';


@NgModule({
  declarations: [
    CrearRolsisComponent
  ],
  imports: [
    CommonModule,
    CrearRolsisRoutingModule
  ]
})
export class CrearRolsisModule { }

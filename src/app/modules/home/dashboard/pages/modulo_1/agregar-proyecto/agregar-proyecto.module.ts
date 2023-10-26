import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarProyectoRoutingModule } from './agregar-proyecto-routing.module';
import { AgregarProyectoComponent } from './agregar-proyecto.component';
import { MatButtonModule } from '@angular/material/button';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    AgregarProyectoComponent
  ],
  imports: [
    CommonModule,
    AgregarProyectoRoutingModule,
    MatButtonModule
  ],
  exports: [
    AgregarProyectoComponent
  ]
})
export class AgregarProyectoModule { }

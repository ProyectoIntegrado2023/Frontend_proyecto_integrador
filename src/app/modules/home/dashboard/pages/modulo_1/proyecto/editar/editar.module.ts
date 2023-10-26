import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { AgregarProyectoModule } from '../../agregar-proyecto/agregar-proyecto.module';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    AgregarProyectoModule
  ]
})
export class EditarModule { }
